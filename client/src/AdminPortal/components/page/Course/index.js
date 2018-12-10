import React from 'react';
import './index.scss';
import { getAllCourses,
         getOneCourse,
         createCourse,
         deleteCourse,
         editCourse } from '../../../../services/courseAPIService';


class Course extends React.Component {
  async componentDidMount() {
    const response = await getAllCourses();
    console.log(response);
  }

   render() {
    return (
      <div className="course-page"> Course Management
        <h1>big list of courses</h1>
       </div>
    )
  }
}

export default Course;
