import axios from 'axios'

export const createUser = async (userInfo) => {
  try {
    const data = await axios({
      method: 'POST',
      url: '/api/createUser',
      data: {
        FIRST_NAME: userInfo.firstName,
        MIDDLE_NAME: userInfo.middleName,
        LAST_NAME: userInfo.lastName,
        EMAIL: userInfo.email,
        GENDER: userInfo.gender,
        GENDER: userInfo.gender,
        DOB: userInfo.dob,
        STREET_ADDRESS: userInfo.stAddress,
        SUBURB: userInfo.suburb,
        TOWN: userInfo.town,
        COUNTRY: userInfo.country,
        LANDLINE: userInfo.phoneNumber,
        MOBILE: userInfo.mobile,
        HAS_TAMIRIKI: userInfo.tamarikiCheck,
        NUMBER_OF_TAMIRIKI: userInfo.tamarikiNumber,
        HAS_SIBLINGS: userInfo.whanauCheck,
        NUMBER_OF_SIBLINGS: userInfo.whanauNumber,
        TUPUNA: userInfo.tupuna,
        TUPUNA_UNSURE_EXPLANATION: userInfo.tupunaUnsureText,
        IS_WHANGAI: userInfo.whangai,
        MOTHER_NAME: userInfo.motherName,
        MOTHER_WHAKAPAPA: userInfo.motherWhakapapa,
        FATHER_NAME: userInfo.fatherName,
        FATHER_WHAKAPAPA: userInfo.fatherWhakapapa,
        MATERNAL_GRANDMOTHER_NAME: userInfo.maternalGrandmotherName,
        PATERNAL_GRANDMOTHER_NAME: userInfo.paternalGrandmotherName,
        MATERNAL_GRANDFATHER_NAME: userInfo.maternalGrandfatherName,
        PATERNAL_GRANDFATHER_NAME: userInfo.paternalGrandfatherName,
        DECLARATION_STATEMENTS: userInfo.declaration,
        DATE_OF_FORM_SUBMISSION: userInfo.submissionDate,
      }
    })
    return data.status
  } catch (e) {
    return e
  }
}