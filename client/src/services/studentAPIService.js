import axios from 'axios';

const BASE_URL = 'https://polar-refuge-58258.herokuapp.com';

async function getInstrucStu(id) {
  const response = await axios(`${BASE_URL}/instructors/${id}/students`);
  return response.data;
}

async function getAllStudents() {
  const response = await axios(`${BASE_URL}/students`);
  return response.data;
}

async function getOneStudent(id) {
    const response = await axios(`${BASE_URL}/${id}`);
    return response.data;
}

async function createStudent(studentData) {
  const response = await axios.post(`${BASE_URL}/student`, studentData);
  return response.data;
}
// async function editStudent(studentData) {
//   const response = await axios.put(`${BASE_URL}/student`), studentData);
//   return response.data;
// }

async function deleteStudent(id) {
  await axios.delete(`${BASE_URL}/students/${id}`);
}

export {
  getInstrucStu,
  getAllStudents,
  getOneStudent,
  createStudent,
  deleteStudent,
  // editStudent
}
