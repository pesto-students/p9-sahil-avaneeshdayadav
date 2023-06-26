const mongoose = require('mongoose');
// const userSchema = new mongoose.Schema(
//     {
//         firstName: {
//             type: String,
//             required: true,
//         },
//         lastName: {
//             type: String,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//         },
//         jobTitle: {
//             type: String,
//         },
//         gender: {
//             type: String,
//         },
//         password: {
//             type: String,
//             required: true
//         },
//     },
//     {
//         timestamps: true,
//     },

// );

// Define the user schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    contact: { type: String, required: true },
}, {
    timestamps: true,
},);

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;