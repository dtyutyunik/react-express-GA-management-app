import axios from 'axios';

const BASE_URL = 'https://polar-refuge-58258.herokuapp.com';

async function getAllInstructors() {
  const response = await axios(`${BASE_URL}/instructors`);
  return response.data;
}
async function getOneInstructor(id) {
    const response = await axios(`${BASE_URL}/${id}`);
    return response.data;
}

async function createInstructor(instructorData) {
  const response = await axios.post(`${BASE_URL}/instructor`, instructorData);
  return response.data;
}
async function editInstructor(instructorData) {
  const response = await axios.put(`${BASE_URL}/instructor`), instructorData);
  return response.data;
}

async function deleteInstructor(id) {
  await axios.delete(`${BASE_URL}/instructors/${id}`);
}

export {
  getAllInstructors,
  getOneInstructor,
  createInstructor,
  deleteInstructor,
  editInstructor
}
