import React, { Component } from 'react';
import Home from './components/page/Home';
import Course from './components/page/Course';
import Instructor from './components/page/Instructor';
import Student from './components/page/Student';
import NavLeft from './components/NavLeft';
import './index.scss';

class AdminPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'home',
    }
  }
  handlePageChange(e) {
    this.setState({
      screen: e.currentTarget.name,
    })
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
      default:
        contentView = (<Home />);

    }
    return (
      <div id='wrapper'>
        <NavLeft handlePageChange={this.handlePageChange.bind(this)}/>
        { contentView }
       </div>


    )
  }
}

export default AdminPortal;
