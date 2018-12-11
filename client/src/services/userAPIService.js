import axios from 'axios';

const BASE_URL = "http://localhost:3001";

async function userStudentSignup(userData) {
  const response = await axios.post(`${BASE_URL}/users/students`, userData);
  return response.user;
}

async function userInstructorSignup(userData) {
  const response = await axios.post(`${BASE_URL}/users/instructors`, userData);
  return response.user;
}


async function userLogin(userData) {
  const response = await axios.post(`${BASE_URL}/login`, userData);
  console.log(response);
  return response.data['auth_level'];
}

export {
  userStudentSignup,
  userInstructorSignup,
  userLogin
}
