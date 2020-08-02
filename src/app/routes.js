module.exports=(app)=>{

const emailControllers = require('../controllers/emailControllers');

app
.route('/sendEmail')
.post(emailControllers.sendEmail);

}