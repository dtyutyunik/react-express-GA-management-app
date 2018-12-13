import React, { Component } from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';
import FullTimeDetails from './FullTimeDetails';
import StudentPortal from './index'


class FullTimeOn extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state= {
    }
  }

  render() {
    return(
      <div className="CoursesOutter">
      {this.props.courses.map(eachCourse => (
        <FullTimeDetails
        key = {eachCourse.id}
        title = {eachCourse.title}
        description = {eachCourse.description}
        details = {eachCourse.details}
        price = {eachCourse.price}
        />
      ))}
      </div>
    )
  }
}

export default FullTimeOn;
