require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || '1234' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'abc@gmail.com', // TODO: email sender
    to: 'cba@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});


// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const nodemailer = require('nodemailer');
//
// const app = express();
//
// // View engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
//
// // Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));
//
// // Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
//
// app.get('/', (req, res) => {
//     res.render('contact');
// });
//
// app.post('/send', (req, res) => {
//     const output = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul>
//       <li>Name: ${req.body.name}</li>
//       <li>Date: ${req.body.startDate}</li>
//       <li>Email: ${req.body.email}</li>
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.text}</p>
//   `;
//
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: 'mail.YOURDOMAIN.com',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: 'YOUREMAIL', // generated ethereal user
//             pass: 'YOURPASSWORD'  // generated ethereal password
//         },
//         tls:{
//             rejectUnauthorized:false
//         }
//     });
//
//     // setup email data with unicode symbols
//     let mailOptions = {
//         from: '"Nodemailer Contact" <your@email.com>', // sender address
//         to: 'RECEIVEREMAILS', // list of receivers
//         subject: 'Node Contact Request', // Subject line
//         text: 'Hello world?', // plain text body
//         html: output // html body
//     };
//
//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//
//         res.render('contact', {msg:'Email has been sent'});
//     });
// });
//
// app.listen(3000, () => console.log('Server started...'));

// // Use at least Nodemailer v4.1.0
// const nodemailer = require('nodemailer');
//
// // Generate SMTP service account from ethereal.email
// nodemailer.createTestAccount((err, account) => {
//     if (err) {
//         console.error('Failed to create a testing account. ' + err.message);
//         return process.exit(1);
//     }
//
//     console.log('Credentials obtained, sending message...');
//
//     // Create a SMTP transporter object
//     let transporter = nodemailer.createTransport({
//         host: account.smtp.host,
//         port: account.smtp.port,
//         secure: account.smtp.secure,
//         auth: {
//             user: account.user,
//             pass: account.pass
//         }
//     });
//
//     // Message object
//     let message = {
//         from: 'Sender Name <sender@example.com>',
//         to: 'Recipient <recipient@example.com>',
//         subject: 'Nodemailer is unicode friendly ✔',
//         text: 'Hello to myself!',
//         html: '<p><b>Hello</b> to myself!</p>'
//     };
//
//     transporter.sendMail(message, (err, info) => {
//         if (err) {
//             console.log('Error occurred. ' + err.message);
//             return process.exit(1);
//         }
//
//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//     });
// });


// const nodemailer = require('nodemailer');
// var express = require('express');
// var app = express();
// var port = process.env.PORT || 3002;
//
// var auth = {
//     type: 'oauth2',
//     user: 'YOUR_GMAIL_ADDRESS',
//     clientId: 'YOUR_CLIENT_ID',
//     clientSecret: 'YOUR_CLIENT_SECRET',
//     refreshToken: 'YOUR_REFRESH_TOKEN',
// };
//
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.multipart());
//
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
//
// app.post('/send', function(req, res){
//     response = {
//         name: req.body.name,
//         email: req.body.email,
//         message: req.body.message
//     };
//
//
//     var mailOptions = {
//         from: req.body.name,
//         to: 'tereska.skrzypczyk@gmail.com',
//         subject: 'My site contact from: ' + req.body.name,
//         text: req.body.message,
//         html: 'Message from: ' + req.body.name + '<br></br> Email: ' +  req.body.email + '<br></br> Message: ' + req.body.message,
//     };
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: auth,
//     });
//     transporter.sendMail(mailOptions, (err, res) => {
//         if (err) {
//             return console.log(err);
//         } else {
//             console.log(JSON.stringify(res));
//         }
//     });
// });
// // start the server
// app.listen(port);