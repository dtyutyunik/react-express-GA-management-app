import React, { Component } from 'react';
import './App.css';
import AdminPortal from './AdminPortal';
import InstructorPortal from './InstructorPortal';
import StudentPortal from './StudentPortal';
import Login from './Login';
import LandingPage from './LandingPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portal: 'landing',
      process: 'Register'
    }
    this.changeRegistration=this.changeRegistration.bind(this);
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

  render() {
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
        contentView = (<InstructorPortal />);
        break;
      case 'student':
        contentView = (<StudentPortal />);
        break;
      default:
        contentView = (<Login />);
    }
    const landingNavBar = <div className="navbar">
              <img className="Logo" src="https://lh3.googleusercontent.com/-AlEjJmP0ofE/VOVDme9hxKI/AAAAAAAAABE/LXO0f_WTqMY/s530-p/bs.png" alt="logo"/>
              <h1>BootCamp Startup</h1>
              <button className='btn btn-primary'
                      onClick={() => {this.setPortal('admin')}}
                >Admin</button>
              <button className='btn btn-success'
                      onClick={() => {this.setPortal('instructor')}}
                >Instructor</button>
              <button className='btn btn-default'
                      onClick={() => {this.setPortal('student')}}
                >Student</button>
            </div>
    let isLandingPortal = this.state.portal === 'landing';
    return (
      <div className="App">
        { isLandingPortal ? (landingNavBar) : null }
      { contentView }
      </div>
    );
  }
}

export default App;
