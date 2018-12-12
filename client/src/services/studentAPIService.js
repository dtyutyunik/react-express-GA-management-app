import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

async function getAllStudents() {
  const response = await axios(`${BASE_URL}/Students`);
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
  getAllStudents,
  getOneStudent,
  createStudent,
  deleteStudent,
  // editStudent
}
