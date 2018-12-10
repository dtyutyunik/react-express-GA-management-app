import React, { Component } from 'react';
import './App.css';
import AdminPortal from './AdminPortal';
import InstructorPortal from './InstructorPortal';
import StudentPortal from './StudentPortal';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portal: 'admin'
    }
  }
  render() {
    let contentView;
    switch (this.state.portal) {
      case 'admin':
        contentView = (<AdminPortal />);
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
    return (
      <div className="App">
        <h2>General Assembly</h2>
        { contentView }
      </div>
    );
  }
}

export default App;
