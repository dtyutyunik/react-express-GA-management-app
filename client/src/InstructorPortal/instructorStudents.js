import React from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';
import InstructorPortal from './index';
import StudentDetails from './StudentDetails';

class InstructorStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
      <h1>Instructor Students</h1>
      {this.props.students.map(eachStudent => (
        <StudentDetails
        key = {eachStudent.id}
        name = {eachStudent.fullname}
        phone = {eachStudent.phone}
        email = {eachStudent.email}
        />
      ))}
      </div>
    )
  }
}
export default InstructorStudents;
