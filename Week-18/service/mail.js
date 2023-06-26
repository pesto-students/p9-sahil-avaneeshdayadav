const nodemailer = require('nodemailer');

// Configure nodemailer to send emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
    },
});

module.exports = {
    transporter,
}