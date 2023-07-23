const mongoose = require('mongoose');

const cardSchema = mongoose.Schema(
    {
        MaThe: {
            type: String,
            required: true
        },
        MaTheIn: {
            type: String,
            required: true,
        },
        NgayTao: {
            type: Date,
            required: true,
        },
        NgayHetHan: {
            type: Date,
            required: false,
        },
        TrangThaiKichHoat: {
            type: Boolean,
            required: true,
        },
        TenKhachHang: {
            type: String,
            required: true,
        },
        DiaChi: {
            type: String,
            required: true,
        },
        PhanTang1: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang2: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang3: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang4: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang5: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang6: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang7: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang8: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang9: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang10: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang11: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang12: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang13: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang14: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang15: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang16: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang17: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang18: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang19: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang20: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang21: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang22: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang23: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang24: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang25: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang26: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang27: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang28: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang29: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang30: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang31: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang32: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang33: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang34: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang35: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang36: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang37: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang38: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang39: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang40: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang41: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang42: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang43: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang44: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang45: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang46: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang47: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang48: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang49: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang50: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang51: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang52: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang53: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang54: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang55: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang56: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang57: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang58: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang59: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang60: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang61: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang62: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang63: {
            type: Boolean,
            default: null,
            required: false,
        },
        PhanTang64: {
            type: Boolean,
            default: null,
            required: false,
        },
    },
    {
        timestamps: true
    }
)

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;