const nodeMailer= require('../config/nodemailer');


exports.newComment = (comment) => {
    console.log('inside newComment mailer');

    let htmlString = nodeMailer.renderTemplate({comment:comment}, '/comments/new_comment.ejs');

    nodeMailer.transporter.sendMail({
        from: 'rantdubey6.9@gmail.com',
        to: comment.user.email,
        subject: "New comment published",
        html: htmlString

    }, (err, info)=> {
        if(err){console.log('Error in sending mail !', err); return;}
        console.log('Message Sent !', info);
        return;
    });
} 