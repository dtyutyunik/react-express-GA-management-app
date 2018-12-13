import React from 'react';
import axios from 'axios';
import { Menu, Dropdown, Icon, message} from 'antd';

class InstructorCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.courseInfo
    }
    console.log(this.state.info);
  }

handleSubmit(e){
  e.preventDefault();
  console.log(e.target);
}


  render() {
    return (this.state.info?
      <div>
        <h1>{this.state.info.title}</h1>
      <p>{this.state.info.description}</p>
      <p>{this.state.info.details}</p>
      <p>{this.state.info.capacity}</p>
  </div>:"Looks like you are not teaching a course"
    )
  }
}
export default InstructorCourses;
