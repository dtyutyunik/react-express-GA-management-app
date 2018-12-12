import React from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';
import { getAllStudents } from '../services/studentAPIService'

class InstructorStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }

  async getAllStudents() {
  const students = await getAllStudents();
  this.setState({
    students
  });
}

  render() {
    return (
      <div>
      <h1>InstructorStudents</h1>
      <p students={this.state.students}></p>

      </div>
    )
  }
}
export default InstructorStudents;
