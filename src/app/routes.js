module.exports=(app)=>{

const emailControllers = require('../controllers/emailControllers');

app
.route('/sendEmail')
.post(emailControllers.sendEmail);

app
.route('/')
.get(emailControllers.health);

}