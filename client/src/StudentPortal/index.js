import React from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';
import axios from 'axios';
import FullTimeOn from './FullTimeOn';
import PartTimeOn from './PartTimeOn';
import FullTimeOff from './FullTimeOff';
import PartTimeOff from './PartTimeOff'

import { getAllCourses, registerStudent } from '../services/courseAPIService';

// const BASE_URL = 'http://localhost:3001';

class StudentPortal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      courses: [],
      current: 'user',
      screen: ''
    }
    this.getAllCourses = this.getAllCourses.bind(this);
  }

  async componentDidMount(){
    await this.getAllCourses();
    // await this.registerStudent();
  }

  setView = (view) => {
    this.setState({
      screen: view
    });
  }


async getAllCourses(){
  const response = await getAllCourses();
  console.log(response);
  const courses = response;
  this.setState({
    courses
  })
}

  render() {
    console.log(this.props.studentId, "But does it, though?")
    let { studentId } = this.props
    let content;
    switch (this.state.screen) {
      case 'fullTimeOn':
        content = (<FullTimeOn
                    courses ={this.state.courses}
                    isRegisteredCourse={this.props.isRegisteredCourse}
                    studentId ={studentId} />);
      break;
      case 'partTimeOn':
        content = (<PartTimeOn />);
      break;
      case 'fullTimeOff':
        content = (<FullTimeOff />);
      break;
      case 'partTimeOff':
        content = (<PartTimeOff />);
      break;
      default:
        content = (<FullTimeOn
                    courses = {this.state.courses}
                    isRegisteredCourse={this.props.isRegisteredCourse}
                    studentId ={studentId}/>);
    }

  const SubMenu = Menu.SubMenu;

    return (
      <div>
      <nav>
      <Menu
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <Menu.Item key="user">
          <Icon type="user"/>My Profile
        </Menu.Item>

      <SubMenu title={<span className="subMenu">
        <Icon type="home" />On Campus</span>}>

          <Menu.Item
            onClick={() => this.setView('fullTimeOn')}
            key="home:1">Full-Time Courses
          </Menu.Item>

          <Menu.Item
            onClick={() => this.setView('partTimeOn')}
            key="home:2">Part-Time Courses
          </Menu.Item>
      </SubMenu>

      <SubMenu title={<span className="subMenu">
        <Icon type="laptop" />Online</span>}>

          <Menu.Item
            onClick={() => this.setView('fullTimeOff')}
            key="laptop:1">Full-Time Courses
          </Menu.Item>

          <Menu.Item
            onClick={() => this.setView('partTimeOff')}
            key="laptop:2">Part-Time Courses
          </Menu.Item>
      </SubMenu>

      </Menu>
      </nav>
      {content}
      </div>
    )
  }
}
export default StudentPortal;
