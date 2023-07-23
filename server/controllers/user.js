const { generateAccessToken, generateRefreshToken } = require('../middlewares/jwt');
const User = require('../models/user')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.status(400).json({
            sucess: false,
            mess: 'Missing input'
        })

    const user = await User.findOne({ email })
    if (user)
        throw new Error('User has existed')
    else {
        const newUser = await User.create(req.body)
        return res.status(200).json({
            sucess: newUser ? true : false,
            mess: newUser ? 'Register successfully' : 'Something went wrong'
        })
    }
})
//RefreshToken -> Cấp mới accessToken
//AccessToken -> Xác thực người dùng, phân quyền người dùng
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({
            sucess: false,
            mess: 'Missing input'
        })

    const response = await User.findOne({ email })
    if (response && await response.isCorrectPassword(password)) {
        //Separate password and role
        const { password, role, ...userData } = response.toObject()
        //Create accessToken
        const accessToken = generateAccessToken(response._id, role)
        //Create refreshToken
        const refreshToken = generateRefreshToken(response._id)
        //Save refreshToken to DB
        await User.findByIdAndUpdate(response._id, { refreshToken }, { new: true })
        //Save refreshToken to cookie
        res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })
        return res.status(200).json({
            sucess: true,
            accessToken,
            userData
        })
    } else {
        throw new Error('Invalid credentials!')
    }
})

const getCurrent = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const user = await User.findById(_id).select('-refreshtoken -password -role')
    return res.status(200).json({
        sucess: false,
        rs: user ? user : 'User not found'
    })
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    //Get token from cookies
    const cookie = req.cookies
    //Check valid token
    if (!cookie && !cookie.refreshToken) throw new Error('No refresh token in cookies')
    jwt.verify(cooki.refreshToken, process.env.JWT_SECRET, async (err, decode) => {
        if (err) throw new Error("Invalid refresh token")
        //Check is token has the same value in DB
        const rs = await jwt.verify(cookie.refreshToken, process.env.JWT_SECRET)
        const response = await User.findOne({ _id: rs._id, refreshToken: cookie.refreshToken })
        return res.status(200).json({
            success: response ? true : false,
            accessToken: response ? generateAccessToken(response._id, response.role) : 'Refresh token not matched'
        })
    })
})

const logout = asyncHandler(async (req, res, next) => {
    const cookie = req.cookies
    if (!cookie || !cookie.refreshToken) throw new Error('No refresh token in cookies')
    //Xoá refresh token ở DB
    await User.findOneAndUpdate({ refreshToken: cookie.refreshToken }, { refreshToken: '' }, { new: true })
    //Xóa refresh token ở cookie trình duyệt
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true
    })
    return res.status(200).json({
        success: true,
        mess: 'Logout is done'
    })
})

module.exports = {
    register,
    login,
    getCurrent,
    refreshAccessToken,
    logout
}