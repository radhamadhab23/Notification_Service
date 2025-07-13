const express = require('express');
const {ServerConfig,logger}=require('./config');
const {AboutController, HomeController} = require('./controllers');
const nodemailer = require('nodemailer');
const mailsender= require('./config/email-config');
const apiRoutes = require('./routes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,async() =>{
    console.log(`Server is running on port ${ServerConfig.PORT}`);
           logger.info(`Server started on port ${ServerConfig.PORT}`,{});
    // Example usage of mailsender
try{
      const response= await mailsender.mailsender.sendMail({
        from: ServerConfig.GMAIL_EMAIL,
        to: 'radhamadhabpattnaik23@gmail.com',
        subject: 'Test Email',
        text: 'This is a test email sent from the Notification Service.'});
        console.log('Email sent successfully:', response);
}
catch (error) {
    console.error('Error sending email:', error);
}
})