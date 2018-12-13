import React, { Component } from 'react';
import './App.css';
import AdminPortal from './AdminPortal';
import AboutPortal from './AboutPortal';
import InstructorPortal from './InstructorPortal';
import StudentPortal from './StudentPortal';
import LandingPage from './LandingPage';
import HeaderNav from './HeaderNav';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portal: 'landing',
      token: null,
      fullname: '',
      password: '',
      hasLogined: false,
      userLoginInfo: {}
    }
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.setPortal= this.setPortal.bind(this);
  }
  logout() {
        localStorage.username = '';
        this.setState({
          hasLogined: false,
          fullname: '',
          password: '',
          token: null,
          portal: 'landing'
      });
  }

  login(userLogin) {
    console.log(`i m calling this function and the userLogin credential is
      ${JSON.stringify(userLogin)}`)
      this.setState({
        hasLogined: true,
        username: userLogin.fullname,
        password: userLogin.password,
        token: userLogin.token,
        portal: userLogin['auth_level'],
        userLoginInfo: userLogin
      });

      // console.log(this.state.userLoginInfo);
      // localStorage.username = userLogin.username;
      // localStorage.authLevel = userLogin['auth_level'];
      // console.log(`the useruserLogin is ${JSON.stringify(userLogin)}`)
  }

  setPortal(view) {
    this.setState({
      portal: view
    })
    console.log(this.state.portal);
  }


  render() {
    console.log(this.state.portal);
    let contentView;
    switch (this.state.portal) {

      case 'admin':
        contentView = (<AdminPortal />);
        break;
      case 'landing':
        contentView=(<LandingPage
          info={this.state.process}
          changeRegistration={this.changeRegistration}
          />
        );
        break;
      case 'instructor':
        contentView = (<InstructorPortal
        infoSentThrough={this.state.userLoginInfo}/>);
        break;
      case 'student':
        contentView = (<StudentPortal />);
        break;

        case 'aboutUs':
        contentView = (<AboutPortal />)
        break;
      default:
        contentView = (<LandingPage />);
    }
    return (
      <div className="App">
        <HeaderNav
            logout={this.logout}
            login={this.login}
            hasLogined={this.state.hasLogined}
            username={this.state.username}
            portal={this.state.portal}
            setPortal={this.setPortal}
          />
      { contentView }
      </div>
    );
  }
}

export default App;
