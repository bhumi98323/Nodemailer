const nodemailer = require('nodemailer')

module.exports.sendMail = (req,res)=>{
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
		  user: 'bhumikagupta573@gmail.com',
		  pass: 'nwjp gbdz gmpj cgth'
		}
	  });

	  var mailOptions = {
		from: 'bhumikagupta573@gmail.com',
		to: req.body.to,
		subject: req.body.subject,
		text: req.body.message
	  };

	  transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		  console.log(error);
		} else {
		  console.log('Email sent: ' + info.response);
		  res.send('sent!')
		}
	  });
}