import axios from 'axios'
export const createUser = async (userInfo) => {
  try {
    const data = await axios({
      method: 'POST',
      url: '/api/createUser',
      data: {
        FIRST_NAME: userInfo.firstName.trim(),
        MIDDLE_NAME: userInfo.middleName.trim(),
        LAST_NAME: userInfo.lastName.trim(),
        EMAIL: userInfo.email.trim(),
        GENDER: userInfo.gender,
        GENDER: userInfo.gender,
        DOB: userInfo.dob,
        STREET_ADDRESS: userInfo.stAddress.trim(),
        SUBURB: userInfo.suburb.trim(),
        TOWN: userInfo.town.trim(),
        COUNTRY: userInfo.country,
        LANDLINE: userInfo.phoneNumber,
        MOBILE: userInfo.mobile,
        HAS_TAMIRIKI: userInfo.tamarikiCheck,
        NUMBER_OF_TAMIRIKI: userInfo.tamarikiNumber,
        HAS_SIBLINGS: userInfo.whanauCheck,
        NUMBER_OF_SIBLINGS: userInfo.whanauNumber,
        TUPUNA: userInfo.tupuna,
        TUPUNA_UNSURE_EXPLANATION: userInfo.tupunaUnsureText.trim(),
        IS_WHANGAI: userInfo.whangai,
        MOTHER_NAME: userInfo.motherName.trim(),
        MOTHER_WHAKAPAPA: userInfo.motherWhakapapa.trim(),
        FATHER_NAME: userInfo.fatherName.trim(),
        FATHER_WHAKAPAPA: userInfo.fatherWhakapapa.trim(),
        MATERNAL_GRANDMOTHER_NAME: userInfo.maternalGrandmotherName.trim(),
        PATERNAL_GRANDMOTHER_NAME: userInfo.paternalGrandmotherName.trim(),
        MATERNAL_GRANDFATHER_NAME: userInfo.maternalGrandfatherName.trim(),
        PATERNAL_GRANDFATHER_NAME: userInfo.paternalGrandfatherName.trim(),
        DECLARATION_STATEMENTS: userInfo.declaration,
        DATE_OF_FORM_SUBMISSION: userInfo.submissionDate,
      }
    })
    return data.status
  } catch (e) {
    return e
  }
}

export const sendMail = async ({
  to,
  html,
  text,
  subject,
  contactName,
  orgName,
  phoneNumber,
  kaupapa,
  numberOfPeople,
  submissionDate,
  hireStartDate,
  hireEndDate,
  arrivalTime,
  departureTime
}) => {
  try {
    const data = await axios({
      method: 'POST',
      url: '/api/sendEmail',
      data: {
        to,
        subject,
        html,
        text
      }
    })
    return data.status
  } catch (e) {
    return e
  }
}

