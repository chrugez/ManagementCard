const Event = require('../models/event')
const asyncHandler = require('express-async-handler')

const createEvent = asyncHandler(async (req, res) => {
    const { MaThe, MaTheIn, TenKhachHang } = req.body
    if (!MaThe || !MaTheIn || !TenKhachHang) throw new Error('Missing inputs')
    const event = await Event.findOne({ MaThe })
    if (event) throw new Error(' has existed')
    else {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            success: newEvent ? true : false,
            mess: newEvent ? 'Create done' : 'Something went wrong'
        })
    }
})

const getAllEvents = asyncHandler(async (req, res) => {
    const response = await Event.find()
    return res.status(200).json({
        success: response ? true : false,
        events: response
    })
})

const getEventById = asyncHandler(async (req, res) => {
    const { eid } = req.params
    const event = await Event.findById(eid)
    return res.status(200).json({
        sucess: event ? true : false,
        rs: event ? event : 'Event not found'
    })
})

const getEventByMaThe = asyncHandler(async (req, res) => {
    const { Mathe } = req.params
    const event = await Event.findOne(Mathe)
    return res.status(200).json({
        sucess: event ? true : false,
        rs: event ? event : 'Event not found'
    })
})

const getEventByMaTheIn = asyncHandler(async (req, res) => {
    const { MatheIn } = req.params
    const event = await Event.findOne(MatheIn)
    return res.status(200).json({
        sucess: event ? true : false,
        rs: event ? event : 'Event not found'
    })
})

const getEventByTen = asyncHandler(async (req, res) => {
    const { TenKhachHang } = req.params
    const event = await Event.findOne(TenKhachHang)
    return res.status(200).json({
        sucess: event ? true : false,
        rs: event ? event : 'Event not found'
    })
})

const deleteEvent = asyncHandler(async (req, res) => {
    const { eid } = req.params
    const response = await Event.findByIdAndDelete(eid)
    return res.status(200).json({
        success: response ? true : false,
        event: response ? `Event is deleted` : 'Cannot delete event'
    })
})

const updateEvent = asyncHandler(async (req, res) => {
    const { eid } = req.params
    if (!eid || Object.keys(req.body).length === 0) throw new Error('Missing input')
    const response = await Event.findByIdAndUpdate(eid, req.body, { new: true })
    return res.status(200).json({
        success: response ? true : false,
        event: response ? response : 'Cannot update event'
    })
})

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    getEventByMaThe,
    getEventByMaTheIn,
    getEventByTen,
    deleteEvent,
    updateEvent
}


