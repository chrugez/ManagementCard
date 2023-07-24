const Card = require('../models/card')
const asyncHandler = require('express-async-handler')

const createCard = asyncHandler(async (req, res) => {
    const { MaThe, MaTheIn, TenKhachHang } = req.body
    if (!MaThe || !MaTheIn || !TenKhachHang) throw new Error('Missing inputs')
    const card = await Card.findOne({ MaThe })
    if (card) throw new Error('Card has existed')
    else {
        const newCard = await Card.create(req.body)
        res.status(200).json({
            success: newCard ? true : false,
            mess: newCard ? 'Create done' : 'Something went wrong'
        })
    }
})

const getAllCards = asyncHandler(async (req, res) => {
    const response = await Card.find()
    return res.status(200).json({
        success: response ? true : false,
        cards: response
    })
})

const getCardById = asyncHandler(async (req, res) => {
    const { cid } = req.params
    const card = await Card.findById(cid)
    return res.status(200).json({
        sucess: card ? true : false,
        rs: card ? card : 'Card not found'
    })
})

const getCardByMaThe = asyncHandler(async (req, res) => {
    const { Mathe } = req.params
    const card = await Card.findOne(Mathe)
    return res.status(200).json({
        sucess: card ? true : false,
        rs: card ? card : 'Card not found'
    })
})

const getCardByMaTheIn = asyncHandler(async (req, res) => {
    const { MatheIn } = req.params
    const card = await Card.findOne(MatheIn)
    return res.status(200).json({
        sucess: card ? true : false,
        rs: card ? card : 'Card not found'
    })
})

const getCardByTen = asyncHandler(async (req, res) => {
    const { TenKhachHang } = req.params
    const card = await Card.findOne(TenKhachHang)
    return res.status(200).json({
        sucess: card ? true : false,
        rs: card ? card : 'Card not found'
    })
})

const deleteCard = asyncHandler(async (req, res) => {
    const { cid } = req.params
    const response = await Card.findByIdAndDelete(cid)
    return res.status(200).json({
        success: response ? true : false,
        card: response ? `Card is deleted` : 'No card delete'
    })
})

const updateCard = asyncHandler(async (req, res) => {
    const { cid } = req.params
    if (!cid || Object.keys(req.body).length === 0) throw new Error('Missing input')
    const response = await Card.findByIdAndUpdate(cid, req.body, { new: true })
    return res.status(200).json({
        success: response ? true : false,
        card: response ? response : 'No card update'
    })
})

module.exports = {
    createCard,
    getAllCards,
    getCardById,
    getCardByMaThe,
    getCardByMaTheIn,
    getCardByTen,
    deleteCard,
    updateCard
}