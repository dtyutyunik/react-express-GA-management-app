import React from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';
import InstructorStudents from './instructorStudents';
import InstructorCourses from './instructorCourses';
import axios from 'axios';
import { getAllStudents } from '../services/studentAPIService'

class InstructorPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      current: 'user',
      screen: '',
    }
  }

  setView = (view) => {
    this.setState({
      screen: view
    });
  }

  async componentDidMount() {
    await this.getAllStudents();
  }

  async getAllStudents() {
    const response = await getAllStudents();
    const students = response;
    console.log(response);
    // debugger;
    this.setState({
      students
    });
  }

  render() {
    let content;
    switch (this.state.screen) {
      case 'stu':
        content = (<InstructorStudents
                    students = {this.state.students}/>);
      break;
      case 'course':
        content = (<InstructorCourses />);
      break;
      // case 'user':
      //   content = (<InstructorPortal />);
      // break;
    }

  const SubMenu = Menu.SubMenu;

    return (
      <div>
      <nav className='instructorMenu'>
        <Menu
          selectedKeys={[this.state.current]}
          mode="horizontal">
          <Menu.Item key="user">
            <Icon type="user"/>My Profile
          </Menu.Item>

        <SubMenu title={<span className="subMenu">
          <Icon type="form" />My Courses</span>}>

            <Menu.Item
              onClick={() => this.setView('course')}
              key="form:1">Course Info
            </Menu.Item>
            <Menu.Item
              onClick={() => this.setView('stu')}
              key="form:2">Student List
            </Menu.Item>

        </SubMenu>
        </Menu>
        </nav>
        {content}
        </div>
    )
  }
}
export default InstructorPortal;
