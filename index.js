const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//email to donor if a receiver is interested in his/her donation
app.post("/donor-donation-email", cors(), (req, res) => {
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
    to: data.t,
    subject: "Receiver's interested in your donation",

    html: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
      background-color: #2BB8C1;
      borderRadius: 0.5rem;
      font-color: black;
      margin-top:8px;
    }
    </style>
    </head>
    <body>
    <div style="background-color:#F1F3F4; padding:20px;">
    <p> Hi ${data.d}. We hope you're doing well. </p>
    <p> This is to inform you that ${data.r} with number ${data.rc} is interested in your donation ${data.n}. For further details, please click the button below.</p>
             <button type="button" class="button">
                <a style="text-decoration:none" href="${data.l}" class="button">
                    PROCEED
              </a></button>
              </div>
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

//email to donor if a receiver needs blood
app.post("/donor-blood-donation-email", cors(), (req, res) => {
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
    to: data.t,
    subject: "Receiver's interested in your donation",

    html: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
      background-color: #2BB8C1;
      borderRadius: 0.5rem;
      font-color: black;
      margin-top:8px;
    }
    </style>
    </head>
    <body>
    <div style="background-color:#F1F3F4; padding:20px;">
    <p> Hi ${data.d}. We hope you're doing well. </p>
    <p> This is to inform you that ${data.r} with number ${data.rc} needs blood of type ${data.b}. For further details, please click the button below.</p>
             <button type="button" class="button">
                <a style="text-decoration:none" href="${data.l}" class="button">
                    PROCEED
              </a></button>
              </div>
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

//email to receiver when donor accepts request for his/her donation
app.post("/receiver-accept-donation-email", cors(), (req, res) => {
  const data1 = req.body;

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
    to: data1.t,
    subject: "Donor accepted your request!",

    html: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
      background-color: #2BB8C1;
      borderRadius: 0.5rem;
      font-color: black;
      margin-top:8px;
    }
    </style>
    </head>
    <body>
    <div style="background-color:#F1F3F4; padding:20px;">
    <p> Hi ${data1.rc}. We hope you're doing well. </p>
    <p> This is to inform you that ${data1.d} with number ${data1.dc} is accepting your donation request for ${data1.n}. For further details, please click the button below.</p>
             <button type="button" class="button">
                <a style="text-decoration:none" href="${data1.l}" class="button">
                    PROCEED
              </a></button>
              </div>
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

//email to receiver when donor declines
app.post("/receiver-decline-donation-email", cors(), (req, res) => {
  const data1 = req.body;

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
    to: data1.t,
    subject: "Sorry! Donor declined your request.",

    html: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
      background-color: #2BB8C1;
      borderRadius: 0.5rem;
      font-color: black;
      margin-top:8px;
    }
    </style>
    </head>
    <body>
    <div style="background-color:#F1F3F4; padding:20px;">
    <p> Hi ${data1.rc}. We hope you're doing well. </p>
    <p> This is to inform you that ${data1.d} with number ${data1.dc} has declined your donation request for ${data1.n}.
              </div>
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

//email to volunteer if receiver is interested in a donation
app.post("/volunteer-delivery-email", cors(), (req, res) => {
  console.log("email function for vol");
  const data2 = req.body;
  console.log("VOL");
  console.log(data2);

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
    to: data2.v,
    subject: "Time to deliver!",

    html: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
      background-color: #2BB8C1;
      border-radius: 0.5rem;
      font-color: black;
      margin-top:8px;
    }
    </style>
    </head>
    <body>
    
    <div style="background-color:#F1F3F4; padding:20px;">
    <p> Hi ${data2.n}! We hope you're doing well. </p>
    <p> This is to inform you that receiver named ${data2.c} with phone ${data2.d} wants you to deliver ${data2.e} donated by ${data2.l} with phone ${data2.k}. For further details, please click the button below.</p>
             
             <button type="button" class="button">
                <a style="text-decoration:none" href="${data2.b}" class="button">
                    PROCEED
              </a></button>
              
              </div>
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
  //}
});

//if admin removes a volunteer
app.post("/volunteer-email", cors(), (req, res) => {
  console.log("email function");
  const data3 = req.body;

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

    to: data3.email,
    subject: "Sorry!",

    html: `<!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
    <div style="background-color:#F1F3F4; padding:20px;">
    <p> Hi ${data3.name}! We hope you're doing well.</p>
    <p> This is to inform you that you are no longer our volunteer due to the given reason: ${data3.reason} </p>
    </div>
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
/*
// dononation expiry
app.post("/expiry-email", cors(), (req, res) => {
  console.log(" expiry email function");
  const data = req.body;
  console.log(" Heyy fom expiry email", data);
  console.log(" Heyy fom expiry email", data.donorEmail);

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
    to: data.donorEmail,
    subject: "  Donation Expired",
    html: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
      background-color: #2BB8C1;
      border-radius: 0.5rem;
      font-color: black;
      margin-top:8px;
    }
    </style>
    </head>
    <body>
    <div style="background-color:#F1F3F4; padding:20px;">
    <p> Hi ${data.donorName}! We hope you're doing well.</p>
    <p>Your donation ${data.donationName} has expired. If you want to activate it again, please click the button below. </p>

    <button type="button" class="button">
                <a style="text-decoration:none" href="${data.link2}" class="button">
                    PROCEED
              </a></button>

              </div>
    </body>
    </html>  `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error", error);
    } else {
      console.log("email has been sent", info.response);
      //console.log("email",email);
    }
  });
});*/

//food donation expiry
app.post("/expiry-email", cors(), (req, res) => {
  console.log("food expiry email function");
  const data4 = req.body;

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
    to: data4.donorEmail,
    subject: "  Donation Expired",
    html: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
      background-color: #2BB8C1;
      border-radius: 0.5rem;
      font-color: black;
      margin-top:8px;
    }
    </style>
    </head>
    <body>

    <div style="background-color:#F1F3F4; padding:20px;">
    <p> Hi ${data4.donorName}! We hope you're doing well.</p>
    <p>Your donation ${data4.donation} has expired. If you want to activate it again, please click the button below. </p>
    
    <button type="button" class="button">
                <a style="text-decoration:none" href="${data4.link2}" class="button">
                    PROCEED
              </a></button>
    </div>
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

// used item donation
app.post("/used-expiry", cors(), (req, res) => {
  console.log(" expiry email  from used side function");
  const data5 = req.body;

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
    to: data5.donorEmail,
    subject: "  Donation Expired",

    html: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
      background-color: #2BB8C1;
      border-radius: 0.5rem;
      font-color: black;
      margin-top:8px;
    }
    </style>
    </head>
    <body>
    
    <div style="background-color:#F1F3F4; padding:20px;">
    <p> Hi ${data5.donorName}! We hope you're doing well.</p>
    <p>Your donation ${data5.itemDonation} has expired. If you want to activate it again, please click the button below. </p>

     <button type="button" class="button">
                <a style="text-decoration:none" href="${data5.link2}" class="button">
                    PROCEED
              </a></button>
    </div>
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

// blood expiry
app.post("/blood-expiry", cors(), (req, res) => {
  console.log(" expiry email  from blood side function");
  const data6 = req.body;

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

    to: data6.donorEmail,
    subject: "  Donation Expired",

    html: `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
      background-color: #2BB8C1;
      border-radius: 0.5rem;
      font-color: black;
      margin-top:8px;
    }
    </style>
    </head>
    <body>
    
    <div style="background-color:#F1F3F4; padding:20px;">
    <p> Hi ${data6.donorName}! We hope you're doing well.</p>
    <p>Your donation ${data6.bloodDonation} has expired. If you want to activate it again, please click the button below. </p>

     <button type="button" class="button">
                <a style="text-decoration:none" href="${data6.link2}" class="button">
                    PROCEED
              </a></button>
    </div>
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
  //}
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
