const createTransporter = require("./utils/emailClient");

exports.handler = async event => {
  const eventBody = JSON.parse(event.body);
  if (event.httpMethod === 'POST') {
    try {
      const mailOptions = {
        from: process.env.EMAIL_ADDRESS_ALIAS,
        to: eventBody.to,
        subject: eventBody.subject,
        text: eventBody.text,
        html: eventBody.html
      };
      let emailTransport = await createTransporter();
      let response = await emailTransport.sendMail(mailOptions);
      console.log(response)
      console.log('ran ran ran ran ran ran')
      return {
        statusCode: 200
        // body: JSON.stringify(emailTransport)
      };
    } catch (e) {
      console.log(e)
      return {
        statusCode: 500
        // body: JSON.stringify(e)
      };
    }
  } else {
    return {
      statusCode: 400,
      body: "Invalid request"
    };
  }
};