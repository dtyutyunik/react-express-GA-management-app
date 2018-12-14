import React from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';
import axios from 'axios';
import FullTimeOn from './FullTimeOn';
import PartTimeOn from './PartTimeOn';
import FullTimeOff from './FullTimeOff';
import PartTimeOff from './PartTimeOff';
import StudentInfo from './StudentInfo';
import StudentEdit from './StudentEdit';

import { getAllCourses, registerStudent } from '../services/courseAPIService';

const BASE_URL = 'http://localhost:3001';

class StudentPortal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      courses: [],
      current: '',
      screen: '',
      studentProfile: props.studentProfile,
    }
    this.getAllCourses = this.getAllCourses.bind(this);
    this.updateStudentProfile = this.updateStudentProfile.bind(this);

  }

  async componentDidMount(){
    await this.getAllCourses();
  }

  setView = (view) => {
    this.setState({
      screen: view,
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
async updateStudentProfile(stu) {
     const response = await axios.put(`${BASE_URL}/students/${this.props.studentProfile.id}`,
     stu);
     console.log(response);
     console.log(response.data);
     this.setState({
       studentProfile: response.data,
     })
 }

render() {
    let { studentId } = this.props
    let content;
    switch (this.state.screen) {
      case 'Stedit':
        content = (<StudentEdit
          studentProfile={this.state.studentProfile}
          setView={this.setView}
          updateStudentProfile={this.updateStudentProfile}
          />);
        break;
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
      // case 'edit':
      //   content = (<StudentEdit />);
      // break;
      case 'studentInfo':
        content = (<StudentInfo
                    studentProfile = {this.state.studentProfile} setView={this.setView} />);
      default:
        content = (<StudentInfo
                    studentProfile = {this.state.studentProfile} setView={this.setView} />);
    }

  const SubMenu = Menu.SubMenu;

    return (
      <div>
      <nav>
      <Menu
        selectedKeys={this.state.current}
        mode="horizontal">
        <Menu.Item onClick={() => this.setView('studentInfo')}
                    key="user">
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
