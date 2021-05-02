const nodemailer = require('nodemailer');
module.exports = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PW
  }
});