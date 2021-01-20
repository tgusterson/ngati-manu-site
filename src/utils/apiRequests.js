import axios from 'axios'

export const createUser = async (userInfo) => {
  try {
    const data = await axios({
      method: 'post',
      url: '/api/createUser',
      data: {
        FNAME: userInfo.firstname,
        LNAME: userInfo.lastName,
        EMAIL: userInfo.email,
        APPROVED: "Pending"
      }
    })
    console.log('success')
    return data.data
  } catch (e) {
    console.log(e)
    return e
  }
}