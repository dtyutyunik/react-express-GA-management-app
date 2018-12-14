import React from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';
import StudentDetails from './StudentDetails';
import InstructorCourses from './instructorCourses';
import InstructorInfo from './instructorInfo';
import InstructorEdit from './instructorEdit';
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
    this.setView = this.setView.bind(this);
    this.updateInstructorProfile = this.updateInstructorProfile.bind(this);
  }

  async setView(view){
    this.setState({
      screen: view
    });
    if(view=='course'){
      await this.getCourseInfo();
    }
    if(view=='stu'){
      await this.getInstrucStudents();
    }
    if(view=='edit'){

    }


    console.log('thie view is', this.state.screen);

  }

  handleClick = (e) => {
  this.setState({
    current: e.key,
  });
}
  async updateInstructorProfile(stu) {
    console.log(`inside update instructor profile`)
     const response = await axios.put(`${BASE_URL}/instructors/${this.state.instructorDetails.id}`,
     stu);
     console.log(response.data);
     this.setState({
       instructorDetails: response.data,
     });
     console.log(this.state.instructorDetails);
     
 }


  async getCourseInfo(){
    const pull= await axios(`${BASE_URL}/instructors/${this.state.instructorDetails.id}/courses`);
    console.log(pull);
    this.setState({
      courseInfo: pull.data?pull.data.course:false
    });

}


  async getInstrucStudents() {
      try{
        const response= await axios(`${BASE_URL}/instructors/${this.state.instructorDetails.id}/students`);
        // console.log(response);
        this.setState({
          students: response.data?response.data.students:false
        });

      }catch(e){

        console.log(e);
      }

  }


  render() {
    let content;
    console.log(this.state.courseInfo);
    // console.log(this.state.students);
    // console.log(this.state.instructorDetails.id)
    switch (this.state.screen) {
      case 'edit':
      content =(<InstructorEdit instinfo={this.state.instructorDetails}
                                setView={this.setView}
                                updateInstructorProfile = {this.updateInstructorProfile}
                                />);
      break;
      case 'stu':
        content = (this.state.students?<StudentDetails
                    students = {this.state.students}
                    instructorInfo={this.state.instructorDetails.id}
                    renderStudent={this.getInstrucStudents}/>
                  :<p>No Students in class</p>);
      break;
      case 'course':

        content = (<InstructorCourses
          courseInfo={this.state.courseInfo}/>);
      break;
      case 'prof':
        content = (<InstructorInfo
                    instructorInfo = {this.state.instructorDetails}
                    />
                  )

      default:
      content =(<InstructorInfo instinfo={this.state.instructorDetails}
                                setView={this.setView}

                                />);

    }

  const SubMenu = Menu.SubMenu;

    return (
      <div>

      <nav className='instructorMenu'>
        <Menu
          selectedKeys={[this.state.current]}
          mode="horizontal">
          <Menu.Item onClick={() => this.setView('prof')}
          key="user">
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
