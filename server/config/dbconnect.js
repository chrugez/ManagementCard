const { default: mongoose } = require('mongoose');

const dbconnect = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGODB_URL);
        if (conn.connection.readyState === 1) console.log('DB connection is sucessfully');
        else console.log('DB connecting');
    } catch (error) {
        console.log('DB connection is fail');
        throw new Error(error);
    }
}

module.exports = dbconnect;