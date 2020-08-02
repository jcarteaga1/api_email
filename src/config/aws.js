const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

const SES_SERVICE = new AWS.SES({
	accessKeyId :process.env.KeyIdAWS,
	secretAccessKey :process.env.SecrectKeyAWS,
	sessionToken :process.env.TokenAWS,
});

module.exports={
	SES_SERVICE
}