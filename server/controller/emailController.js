var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

const sendEmail = (req, res) => {
  let { name, emailAddress, subject, message } = req.body.emailBody;

  console.log(req.body);
  console.log(name, emailAddress, subject, message);
  res.send("hello");

  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "destinyleaross@gmail.com",
        pass: "8tcKbr7Xbm!"
      }
    })
  );

  var mailOptions = {
    from: emailAddress,
    to: "destinyleaross@gmail.com",
    subject: name + " | " + subject,
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  sendEmail
};
