// const nodemailer = require("nodemailer");

// const sendMail = async (req, res) => {
//   let testAccount = await nodemailer.createTestAccount();

//   // connect with the smtp
//   let transporter = await nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: "shubhamshinde6678@gmail.com",
//       pass: "India$11",
//     },
//   });

//   let info = await transporter.sendMail({
//     from: 'shubhamshinde6678@gmail.com', // sender address
//     to: "shubhamshinde6699@gmail.com", // list of receivers
//     subject: "Hello Thapa", // Subject line
//     text: "Hello YT Thapa", // plain text body
//     html: "<b>Hello YT Thapa</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   res.json(info);
// };

// module.exports = sendMail;


const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'shuhbhamshinde6699@gmail.com', // replace with your email address
        pass: 'India@11' // replace with your email password
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: 'shubhamshinde6699@gmail.com', // sender address
    to: 'shuhbhamshinde6678@gmail.com ', // list of receivers
    subject: 'Test email from Node.js', // Subject line
    text: 'Hello world!', // plain text body
    html: '<b>Hello world!</b>' // html body
};

// // send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});


