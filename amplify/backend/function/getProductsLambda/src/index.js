const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  const params = {
    TableName: "dynamo9062efb4-dev",
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      productId: uuid.v1(),
      name: "Banana",
      random: "tbh"
    }
  };

  dynamodb.put(params, (error, data) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    };

    if (error) {
      console.log(error);
      const response = {
        statusCode: 500,
        headers,
        body: JSON.stringify({status: false})
      };
      callback(null, response);
      return;
    }

    const response = {
      statusCode: 200,
      headers,
      body: JSON.stringify(params.Item)
    };
    callback(null,response);
  });
};
