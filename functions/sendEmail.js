const transporter = require("./utils/emailClient");

exports.handler = async event => {
  console.log(event.body)
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
      let info = await transporter.sendMail(mailOptions);
      return {
        statusCode: 200,
        body: JSON.stringify(info)
      };
    } catch (e) {
      console.log(e)
      return {
        statusCode: 500,
        body: JSON.stringify(e)
      };
    }
  } else {
    return {
      statusCode: 400,
      body: "Invalid request"
    };
  }
};