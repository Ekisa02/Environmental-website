const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Configure nodemailer transporter (use your Gmail credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'josephekisaopurongo@gmail.com',        
    pass: 'dmau gvyh kfvx eqvz'      // Use an App Password, not your Gmail password
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Email options
  const mailOptions = {
    from: email,
    to: 'josephekisaopurongo@gmail.com',
    subject: subject || 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent! Thank you for contacting us.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});