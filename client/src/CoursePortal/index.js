import React, { Component } from 'react';
import {Menu} from 'antd/lib';

import {
  getAllCourses,
  getOneCourse,
  createCourse,
  deleteCourse,
  editCourse
} from '../services/courseAPIService.js';


class CourseList extends React.Component {
  constructor(props){
    super(props);

    this.state={
      course: []
    }

    this.getClass=this.getClass.bind(this);
  }

async componentDidMount(){
  // const courseinfo=await getAllCourses();
  // console.log(courseinfo);
}
  async getClass(){
    const courseinfo=await getOneCourse(1);
    console.log(courseinfo);
    this.setState({
      course: courseinfo
    })


  }

  render() {
    return(
      <div className="CoursesOutter">
          Stuff
      {/* <button onClick={()=>this.getClass()}> click to get class</button> */}

    {this.state.course.map(e=>{
        return <div key={e.id}>{e.title}</div>
      })}

    </div>
    )
  }
}

export default CourseList;
