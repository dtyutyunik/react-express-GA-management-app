import axios from 'axios';
const BASE_URL = "https://polar-refuge-58258.herokuapp.com";

async function userStudentSignup(userData) {
  const response = await axios.post(`${BASE_URL}/users/students`, userData);
  return response.user;
}

async function userInstructorSignup(userData) {
  const response = await axios.post(`${BASE_URL}/users/instructors`, userData);
  return response.user;
}

async function userLogin(userData) {
  console.log('user login attemps')
  const response = await axios.post(`${BASE_URL}/login`, userData);
  console.log(response);
  return response.data;
}

export {
  userStudentSignup,
  userInstructorSignup,
  userLogin
}
