const router = require('express').Router()
const ctrls = require('../controllers/card')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')

//Tạo card
router.post('/', [verifyAccessToken], ctrls.createCard)
//Lấy card
router.get('/:cid', [verifyAccessToken], ctrls.getCardById)
//Lấy cards
router.get('/', [verifyAccessToken], ctrls.getAllCards)
//Lấy card theo MaThe
router.get('/:MaThe', [verifyAccessToken], ctrls.getCardByMaThe)
//Lấy card theo MaTheIn
router.get('/:MaTheIn', [verifyAccessToken], ctrls.getCardByMaTheIn)
//Lấy card theo TenKhachHang
router.get('/:TenKhachHang', [verifyAccessToken], ctrls.getCardByTen)
//Sửa card
router.put('/:cid', [verifyAccessToken], ctrls.updateCard)
//Xóa card
router.delete('/:cid', [verifyAccessToken, isAdmin], ctrls.deleteCard)


module.exports = router