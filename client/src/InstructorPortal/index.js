import React from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';
import InstructorStudents from './instructorStudents';
import InstructorCourses from './instructorCourses';
import InstructorInfo from './instructorInfo';
import axios from 'axios';
import { getInstrucStu } from '../services/studentAPIService';
const BASE_URL = 'http://localhost:3001';

class InstructorPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      current: 'user',
      instructorDetails: props.infoSentThrough,
      screen: '',
      courseInfo: []
    }
    this.getInstrucStudents = this.getInstrucStudents.bind(this);
    this.getCourseInfo = this.getCourseInfo.bind(this);
  }

  setView = (view) => {
    this.setState({
      screen: view
    });

    console.log('thie view is', this.state.screen);

  }

  handleClick = (e) => {
  this.setState({
    current: e.key,
  });
}


async getCourseInfo(){
  const pull= await axios(`${BASE_URL}/instructors/${this.state.instructorDetails.id}/courses`);
  this.setState({
    courseInfo: pull.data?pull.data:false
  });

}

  async componentDidMount() {

    await this.getCourseInfo();
    await this.getInstrucStudents();
  }


  async getInstrucStudents() {
      try{
        const response= await axios(`${BASE_URL}/instructors/${this.state.instructorDetails.id}/students`);
        this.setState({
          students: response.data?response.data.students:false
        });

      }catch(e){

        console.log(e);
      }

  }

  render() {
    let content;
    console.log(this.state.students)
    switch (this.state.screen) {
      case 'stu':
        content = (<InstructorStudents
                    students = {this.state.students}/>);
      break;
      case 'course':

        content = (<InstructorCourses
          courseInfo={this.state.courseInfo}/>);
      break;

      default:
      content =(<InstructorInfo instinfo={this.state.instructorDetails}  />);

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
