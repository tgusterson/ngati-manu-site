const transporter = require("./utils/emailClient");

exports.handler = async event => {
  const eventBody = JSON.parse(event.body);
  if (event.httpMethod === 'POST' && eventBody.key === process.env.FAUNA_SERVER_SECRET) {
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