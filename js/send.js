// Use at least Nodemailer v4.1.0
const nodemailer = require('nodemailer');

// Generate SMTP service account from ethereal.email
nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });

    // Message object
    let message = {
        from: 'Sender Name <sender@example.com>',
        to: 'Recipient <recipient@example.com>',
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html: '<p><b>Hello</b> to myself!</p>'
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});


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