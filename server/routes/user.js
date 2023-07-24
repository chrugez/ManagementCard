const router = require('express').Router()
const ctrls = require('../controllers/user')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')

//Đăng kí
router.post('/register', ctrls.register)
//Đăng nhập
router.post('/login', ctrls.login)
//Lấy user theo _id
router.get('/current', verifyAccessToken, ctrls.getCurrent)
//Tạo refreshToken
router.post('/refreshtoken', ctrls.refreshAccessToken)
//Đăng xuất
router.get('/logout', ctrls.logout)
//Lấy users (Admin)
router.get('/', [verifyAccessToken, isAdmin], ctrls.getUsers)
//Xóa user (Admin)
router.delete('/', [verifyAccessToken, isAdmin], ctrls.deleteUser)
//Sửa thông tin user
router.put('/current', verifyAccessToken, ctrls.updateUser)
//Sửa thông tin user (Admin)
router.put('/:uid', [verifyAccessToken, isAdmin], ctrls.updateUserByAdmin)

module.exports = router
