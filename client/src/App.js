import React, { Component } from 'react';
import './App.css';
import AdminPortal from './AdminPortal';
import InstructorPortal from './InstructorPortal';
import StudentPortal from './StudentPortal';
import { Button } from 'antd'
import Login from './Login';
import Signup from './Signup';
import SignupInstructor from './SignupInstructor';
import LandingPage from './LandingPage';
import HeaderNav from './HeaderNav';
import axios from 'axios';
const BASE_URL = "http://localhost:3001";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portal: 'landing',
      token: null,
      username: ''
    }
    this.updateUsername = this.updateUsername.bind(this);
  }

  async componentDidMount() {

  }
  updateUsername(username) {
    this.setState({
      username
    })
  }
  async userStudentSignup(userData) {
    const response = await axios.post(`${BASE_URL}/users/students`, userData);
    return response.user;
  }

  async userInstructorSignup(userData) {
    const response = await axios.post(`${BASE_URL}/users/instructors`, userData);
    return response.user;
  }
  // buildHeaders() {
  //     const { token } = this.state;
  //     return {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     };
  //   }

  async userLogin(userData) {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    console.log(response);
    return response.data['auth_level'];
  }

  changeRegistration(){

    this.setState({
      process: 'Signed In'
    })
  }

  setPortal(view) {
    this.setState({
      portal: view
    })
  }

  returnToLanding() {
    this.setState({
      portal: 'landing'
    })
  }
  async userLoginAttemp(userData) {
    const response = await this.userLogin(userData);

    this.setState({
      // portal: response['auth_level'],
      // token: response.token
    });



  }
  async userSignupAttemp(userData) {
    const response = await this.userStudentSignup(userData);
    // this.setState({
    //   portal: 'student'
    // });
  }
  async instructorSignupAttemp(userData) {
    const response = await this.userInstructorSignup(userData);
    // this.setState({
    //   portal: 'instructor'
    // })
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        loginFormData: {
          ...prevState.loginFormData,
          [name]: value
        }
      }
    });
  }
  handleSubmit = async e => {
    e.preventDefault();
    await this.userLoginAttemp(this.state.loginFormData);

  }
  handleSignupChange = e => {
    const { name, value } = e.target;
    this.setState( prevState => {
      return {
        signupFormData: {
          ...prevState.signupFormData,
          [name]: value
        }
      }
    });
  }
  handleSingupSubmit = async e => {
    e.preventDefault();
    await this.userSignupAttemp(this.state.signupFormData);

  }
  handleSignupInsChange = e => {
    const { name, value } = e.target;
    this.setState( prevState => {
      return {
        signupInsFormData: {
          ...prevState.signupInsFormData,
          [name]: value
        }
      }
    });
  }
  handleSignupInsSubmit = async e => {
    e.preventDefault();
    await this.instructorSignupAttemp(this.state.signupInsFormData);
  }
  render() {
    let contentView;
    switch (this.state.portal) {
      case 'admin':
        contentView = (<AdminPortal returnToLanding={this.returnToLanding.bind(this)}/>);
        break;
      case 'landing':
        contentView=(<LandingPage
          info={this.state.process}
          changeRegistration={this.changeRegistration}

          />
        );
        break;
      case 'instructor':
        contentView = (<InstructorPortal />);
        break;
      case 'student':
        contentView = (<StudentPortal />);
        break;
      default:
        contentView = (<LandingPage />);
    }
    return (
      <div className="App">
        <HeaderNav updateUsername={this.updateUsername}/>
      { contentView }
      </div>
    );
  }
}

export default App;
