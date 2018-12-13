import React from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';
import FullTimeDetails from './FullTimeDetails';
import StudentPortal from './index';


class FullTimeOn extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state= {
    }
  }

  render() {
    console.log(this.props.studentId);
    let { studentId } = this.props
    return(
      <div>
      {this.props.courses.map(eachCourse => {
        return (

        <FullTimeDetails
        key = {eachCourse.id}
        courseId = {eachCourse.id}
        studentId = {studentId}
        title = {eachCourse.title}
        description = {eachCourse.description}
        details = {eachCourse.details}
        price = {eachCourse.price}
        />
      )}
    )}
      </div>
    )
  }
}

export default FullTimeOn;
