/**
 * Created by shmuel on 5/1/2017.
 */
'use strict';
const nodemailer = require('nodemailer');

exports.send_mail = function(data){
    console.log(data);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shmhad123@gmail.com',
            pass: 'tgbyhnuj'
        }
    });

    var message = '<p>'+'phone : '+ data.phone +'</p>'+
        '<p>'+'mail : '+ data.mail +'</p>'+
        '<p>'+'message : '+ data.message +'</p>';

// setup email data with unicode symbols
    var mailOptions = {
        from: 'hadas site', // sender address
        to: 'shm_had@walla.co.il,hadas.klinait@gmail.com', // list of receivers
        subject: 'האתר של הדס ✔',// Subject line
        text: data.message, // plain text body
        html:message // html body
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    }
);
}


