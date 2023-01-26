const { default: mongoose } = require("mongoose");


const UserSchema = new mongoose.Schema({
    FistName: { type: String, required: true },
    LastName: { type: String, required: true },
    Age: { type: Number, required: true },
    Email: { type: String, required: true, unique: true }
})
module.exports = mongoose.model('API', UserSchema)