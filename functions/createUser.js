const faunadb = require('faunadb'),
  q = faunadb.query

const client = require("./utils/faunaClient");

exports.handler = async event => {
  if (event.httpMethod === 'POST') {
    const eventBody = JSON.parse(event.body);
    try {
      const data = await client.query(
        q.Create(
          q.Collection('Users'),
          {
            data: {
              APPROVED: "Pending",
              FIRST_NAME: eventBody.FIRST_NAME,
              MIDDLE_NAME: eventBody.MIDDLE_NAME,
              LAST_NAME: eventBody.LAST_NAME,
              EMAIL: eventBody.EMAIL,
              GENDER: eventBody.GENDER,
              DOB: eventBody.DOB,
              STREET_ADDRESS: eventBody.STREET_ADDRESS,
              SUBURB: eventBody.SUBURB,
              TOWN: eventBody.TOWN,
              COUNTRY: eventBody.COUNTRY,
              LANDLINE: eventBody.LANDLINE,
              MOBILE: eventBody.MOBILE,
              HAS_TAMIRIKI: eventBody.HAS_TAMIRIKI,
              NUMBER_OF_TAMIRIKI: eventBody.NUMBER_OF_TAMIRIKI,
              HAS_SIBLINGS: eventBody.HAS_SIBLINGS,
              NUMBER_OF_SIBLINGS: eventBody.NUMBER_OF_SIBLINGS,
              TUPUNA: eventBody.TUPUNA,
              IS_WHANGAI: eventBody.IS_WHANGAI,
              MOTHER_NAME: eventBody.MOTHER_NAME,
              MOTHER_WHAKAPAPA: eventBody.MOTHER_WHAKAPAPA,
              FATHER_NAME: eventBody.FATHER_NAME,
              FATHER_WHAKAPAPA: eventBody.FATHER_WHAKAPAPA,
              MATERNAL_GRANDMOTHER_NAME: eventBody.MATERNAL_GRANDMOTHER_NAME,
              PATERNAL_GRANDMOTHER_NAME: eventBody.PATERNAL_GRANDMOTHER_NAME,
              MATERNAL_GRANDFATHER_NAME: eventBody.MATERNAL_GRANDFATHER_NAME,
              PATERNAL_GRANDFATHER_NAME: eventBody.PATERNAL_GRANDFATHER_NAME,
              DECLARATION_STATEMENTS: eventBody.DECLARATION_STATEMENTS,
              DATE_OF_FORM_SUBMISSION: eventBody.DATE_OF_FORM_SUBMISSION,
            }
          },
        )
      )
      return {
        statusCode: 200,
        body: JSON.stringify(data.data)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify(error)
      };
    }
  } else {
    return {
      statusCode: 500,
      body: "Invalid request"
    };
  }
}