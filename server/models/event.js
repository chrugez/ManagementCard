const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        MaThe: {
            type: String,
            required: true
        },
        MaTheIn: {
            type: String,
            required: true
        },
        NgaySuKien: {
            type: Date,
            required: true
        },
        TenChuThe: {
            type: String,
            required: true
        },
        DiaChi: {
            type: String,
            required: true
        }
    }, {
    timestamps: true
}
)

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;