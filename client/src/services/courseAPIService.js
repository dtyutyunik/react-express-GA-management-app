import axios from 'axios';
const BASE_URL = "https://still-ridge-45074.herokuapp.com";

async function getAllCourses() {
  const response = await axios(`${BASE_URL}/courses`);
  console.log(response);
  return response.data;
}

async function registerStudent(courseId, studentId) {
  const response = await axios.put(`${BASE_URL}/course/${courseId}/student/${studentId}`);
  return response.data;
}

async function getOneCourse(id) {
    const response = await axios(`${BASE_URL}/${id}`);
    return response.data;
}

async function createCourse(courseData) {
  const response = await axios.post(`${BASE_URL}/course`, courseData);
  return response.data;
}
async function editCourse(courseData) {
  const response = await axios.put(`${BASE_URL}/course`, courseData);
  return response.data;
}

async function deleteCourse(id) {
  await axios.delete(`${BASE_URL}/courses/${id}`);
}

export {
  registerStudent,
  getAllCourses,
  getOneCourse,
  createCourse,
  deleteCourse,
  editCourse
}
