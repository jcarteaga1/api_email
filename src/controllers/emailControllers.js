const emailConfig = require ('../config/transporter')

exports.sendEmail=(req,res)=>{

	var mailOptions = {
	  from: process.env.Email,
	  to: process.env.AddresseEmail,
	  subject: 'I want to contact you to carry out my project!',
	  text: req.body.text
	};

	emailConfig.transporter.sendMail(mailOptions)
	.then(function(done){
		res.status(200).json(done)
	})
	.catch(function(err){
		res.status(500).send(err.message)
	})

}