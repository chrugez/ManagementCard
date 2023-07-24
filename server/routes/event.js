const router = require('express').Router()
const ctrls = require('../controllers/event')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')

//Tạo Event
router.post('/', [verifyAccessToken], ctrls.createEvent)
//Lấy Event
router.get('/:eid', [verifyAccessToken], ctrls.getEventById)
//Lấy Events
router.get('/', [verifyAccessToken], ctrls.getAllEvents)
//Lấy Event theo MaThe
router.get('/:MaThe', [verifyAccessToken], ctrls.getEventByMaThe)
//Lấy Event theo MaTheIn
router.get('/:MaTheIn', [verifyAccessToken], ctrls.getEventByMaTheIn)
//Lấy Event theo TenKhachHang
router.get('/:TenKhachHang', [verifyAccessToken], ctrls.getEventByTen)
//Sửa Event
router.put('/:eid', [verifyAccessToken], ctrls.updateEvent)
//Xóa Event
router.delete('/:eid', [verifyAccessToken, isAdmin], ctrls.deleteEvent)


module.exports = router