const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const verifyAccessToken = asyncHandler(async (req, res, next) => {
    //bearer token
    //headers: {authorization: bearer token}
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) return res.status(401).json({
                success: false,
                mess: 'Invalid access token'
            })
            console.log(decode);
            req.user = decode;
            next()
        })
    } else {
        return res.status(401).json({
            success: false,
            mess: 'Require authentication!!!'
        })
    }
})

const isAdmin = asyncHandler((req, res, next) => {
    const { role } = req.user
    if (role !== 'admin')
        return res.status(401).json({
            success: false,
            mess: 'REQUIRE ADMIN ROLE'
        })
    next()
})

module.exports = {
    verifyAccessToken,
    isAdmin
}