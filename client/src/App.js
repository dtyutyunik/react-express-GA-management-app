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
      username: '',
      password: '',
      hasLogined: false
    }
    this.updateUserLoginCredential = this.updateUserLoginCredential.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }
  logout() {
        localStorage.username = '';
        this.setState({
          hasLogined: false,
          username: '',
          password: '',
          token: null,
          portal: 'landing'
      });
  }

  login(userLogin) {
    console.log(`i m calling this function and the userLogin credential is
      ${JSON.stringify(userLogin)}`)
      this.setState({
        loginCredential: userLogin,
        hasLogined: true
      });
      // localStorage.username = userLogin.username;
      // localStorage.authLevel = userLogin['auth_level'];
      this.updateUserLoginCredential(userLogin);
      console.log(`the userLoginCredential is ${JSON.stringify(userLogin)}`)
  }

  updateUserLoginCredential(loginCredential) {
    this.setState({
      username: loginCredential.username,
      password: loginCredential.password,
      token: loginCredential.token,
      portal: loginCredential['auth_level']
    })
    console.log(`updateUserLoginCredential is called and credentials are ${loginCredential}`)
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
        <HeaderNav updateUserLoginCredential={this.updateUserLoginCredential}
                   logout={this.logout}
                   login={this.login}
                   hasLogined={this.state.hasLogined}
                   />
      { contentView }
      </div>
    );
  }
}

export default App;
