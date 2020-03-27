const mongoose = require('mongoose')
const user_struct = new mongoose.Schema({
    _id: { type: String, required: true }       
});

module.exports = user_struct;