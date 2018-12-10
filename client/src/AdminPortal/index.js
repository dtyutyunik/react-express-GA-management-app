import React, { Component } from 'react';
import Home from './components/page/Home';
import Course from './components/page/Course';
import Instructor from './components/page/Instructor';
import Student from './components/page/Student';
import Order from './components/page/Order';
import './index.css';
import NavTop from './components/NavTop';
import NavLeft from './components/NavLeft';


class AdminPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: '',
    }
  }

  render() {
    let contentView;
    switch (this.state.screen) {
      case 'home':
        contentView = (<Home />);
        break;
      case 'course':
        contentView = (<Course />);
        break;
      case 'student':
        contentView = (<Student />);
        break;
      case 'instructor':
        contentView = (<Instructor />);
        break;
      case 'order':
        contentView = (<Order />);
        break;
      default:
        contentView = (<Home />);

    }
    return (
      <div id='wrapper'>
        <NavTop />
        <NavLeft />
        { contentView }
       </div>


    )
  }
}

export default AdminPortal;
