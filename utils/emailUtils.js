var nodemailer = require('nodemailer');
var emailAccount = require('../config/config').emailAccount;


exports.sendEmail = function(title, htmlContent, toEmail) {

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: emailAccount.username,
            pass: emailAccount.password
        }
    });

    var mailOptions = {
        from: '"Lux Studios" <luxstudiosmc@gmail.com>',
        to: toEmail,
        subject: title,
        html: htmlContent
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error)
            return console.log(error);


        console.log('Email sent to ' + info.accepted);
    });
};
