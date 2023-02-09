"use strict"
const AWS = require('aws-sdk')

AWS.config.update({
   region: "us-east-1", // replace with your region in AWS account
   accessKeyId: process.env.AWS_DEVELOPER_GROUP_ACCESS_KEY_ID,
   secretAccessKey: process.env.AWS_DEVELOPER_GROUP_SECRET_ACCESS_KEY
})

exports.connect = async () => {
   try {
      global.readDynamoClient = new AWS.DynamoDB.DocumentClient();
      global.writeDynamoClient = new AWS.DynamoDB.DocumentClient();
      console.log("===== Connected to dynamoDB database =====")
   }
   catch (err) {
      console.error("error while connecting to dynamoDB table", err.message)
   }
}