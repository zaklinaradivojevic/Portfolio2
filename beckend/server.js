var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', router);

var transport = nodemailer.createTransport({
  service:"outlook",
  auth: {
      user: "zaklinaPortfolio@outlook.com",
      pass: "portfolio_1"
  },
  tls:{
    rejectUnauthorized:false
  }
});

var transporter = nodemailer.createTransport(transport)



transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'zaklinaPortfolio@outlook.com', 
    subject: 'New Message from Contact Form',
    text: content
  }

  transport.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

app.listen(3002,()=>console.log("Server  is Running")); 
   
