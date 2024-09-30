const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();
require('dotenv').config();

router.post("/", async (req, res) => {
    try {
        console.log("lolol")
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "shivam.calpoly@gmail.com",
                pass: process.env.GMAIL_TOKEN,
            },
        });

        const { subject, email, msg } = req.body;

        let message = {
            from: email,
            to: 'shivam.calpoly@gmail.com',
            subject: subject,
            text: `This message is from: ${email}\n\n${msg}`,
        };

        let info = await transporter.sendMail(message);

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
});

module.exports = router;
