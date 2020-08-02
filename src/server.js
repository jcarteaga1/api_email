require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const awsConfig = require('./config/aws.js')
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routes')(app)

const port = process.env.PORT || 3301;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
