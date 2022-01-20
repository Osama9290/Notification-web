const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

//Set up express
const app = express();
app.use(express.json());
app.use(cors());

//
// email api
app.post("/email", cors(), (req, res) => {
  console.log("email function");
  const data = req.body;

  var transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 587,
    secure: false,
    requireLTS: true,
    auth: {
      user: "ehsaas.adm@gmail.com",
      pass: "EhsaasFYP123",
    },
  });

  var mailOptions = {
    from: `ehsaas.adm@gmail.com`,
    to: data.email,
    subject: "Sorry",
    html: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
      background-color: #2BB8C1;
      borderRadius: 0.7rem;
      color: black;
      marginTop:8px;
      
    }
    </style>
    </head>
    <body>
    
    <h2><p> Hi ${data.name}</p></h2>
    <h3>${data.reason} </h3>
    </body>
    </html>  `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error", error);
    } else {
      console.log("email has been sent", info.response);
    }
  });
});

const PORT = process.env.PORT || 2001;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
