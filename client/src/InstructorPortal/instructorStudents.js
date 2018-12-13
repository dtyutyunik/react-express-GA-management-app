import React from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';
import InstructorPortal from './index';
import StudentDetails from './StudentDetails';

class InstructorStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: props.students
    }
  }

  render() {
    return(this.state.studentInfo?<StudentDetails details={this.state.studentInfo}/>:<p>No Students Currently Enrolled</p>)
  }


}
export default InstructorStudents;
