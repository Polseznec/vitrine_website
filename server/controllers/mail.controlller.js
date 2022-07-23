const nodemailer = require("nodemailer");
require("dotenv").config({
  path: "./config/.env",
});

module.exports.sendEmail = async function (req, res) {
  const INTERN_OUTPUT = `
  <p>NOUVELLE COMMANDE</p>
  <h3>Details</h3>
  <h4>Client</h4>
  <ul>
    <li>Prénom : ${req.body.firstname}</li>
    <li>Nom : ${req.body.lastname}</li>
    <li>Email : ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  <h4>Product : ${req.body.product.title} </h4>
  <ul>
    <li>Prix ${req.body.product.price}€</li>
    <img src="${req.body.product.main_picture}" style={{width:"200px"}}/>

    <li>ID : ${req.body.product._id}</li>
  </ul>
  `;

  const CLIENT_OUTPUT = `
    <p>Merci ${req.body.firstname},</p>
    <p>Je vais me bouger le cu pour que tu recupère au plus viteta commande :)</p>
    <p>Lili</p>
  `;

  let transporter = nodemailer.createTransport({
    host: `${process.env.MAIL_HOST}`,
    port: 587,
    secure: false,
    auth: {
      user: `${process.env.MAIL_USER}`,
      pass: `${process.env.MAIL_PASSWORD}`,
    },
    tls: { rejectUnauthorized: false },
  });

  let internInfo = await transporter.sendMail({
    from: `"Mail Bot" <${process.env.MAIL_USER}>`,
    to: `${process.env.MAIL_TEST}`,
    subject: "[COMMANDE À TRAITER]",
    html: INTERN_OUTPUT,
  });
  // .catch("Inter mailing", console.error);

  let clientInfo = await transporter.sendMail({
    from: `"Lili Vous fait les poches" <${process.env.MAIL_USER}>`,
    to: req.body.email,
    subject: "Merci, votre command va etres traité :)",
    html: CLIENT_OUTPUT,
  });
  // .catch("client mailing", console.error);

  //intern
  console.log("Message sent: %s", internInfo.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(internInfo));
  //client
  console.log("Message sent: %s", clientInfo.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(clientInfo));
};
