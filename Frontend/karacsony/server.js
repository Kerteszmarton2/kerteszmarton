const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP szerver címe (pl. Gmail)
    port: 587,
    secure: false, // true SSL-hez, false STARTTLS-hez
    auth: {
        user: "your-email@gmail.com", // Itt add meg az e-mail címed
        pass: "your-email-password" // Add meg a jelszavad (jobb, ha app jelszót használsz)
    }
});

app.post('/send-email', (req, res) => {
    const { email, subject, message } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com', // A küldő címe
        to: email, // A címzett címe
        subject: subject || "Ajándék ötletek szavazat", // Téma
        text: message || "Köszönjük, hogy szavazott az ajándékötleteinkre!" // Üzenet
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).send("Email küldési hiba.");
        } else {
            console.log("Email sent:", info.response);
            res.status(200).send("Email sikeresen elküldve.");
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));