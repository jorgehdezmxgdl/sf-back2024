const nodemailer = require("nodemailer");

class MailSender {    
  constructor(transportConfig) {
    this.transportConfig = transportConfig;
    this.transporter = nodemailer.createTransport(this.transportConfig);
    this.mailOptions = {};  
  }
  
  setMailOptions(options) {
    this.mailOptions = {
      from: options.from,
      to: options.to,
      subject: options.subject,
      text: options.text || '',  
      html: options.html || ''   
    };
  }

  sendMail() {
    this.transporter.sendMail(this.mailOptions, (error, info) => {
      if (error) {
        return error;
      } else {
        return info;
      }
    });
  }
}

module.exports = MailSender;