const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        MaThe: {
            type: String,
            required: true,
            unique: true
        },
        MaTheIn: {
            type: String,
            required: true,
            unique: true
        },
        NgaySuKien: {
            type: Date,
            default: new Date()
        },
        TenKhachHang: {
            type: String,
            required: true
        },
        DiaChi: {
            type: String,
            required: false
        }
    }, {
    timestamps: true
}
)

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;