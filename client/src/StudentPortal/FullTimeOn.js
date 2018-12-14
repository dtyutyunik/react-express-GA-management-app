import React from 'react';
import { Menu, Dropdown, Icon, message} from 'antd';
import FullTimeDetails from './FullTimeDetails';
import StudentPortal from './index';


class FullTimeOn extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    }
  }

  render() {
    let { studentId } = this.props;
    let { isRegisteredCourse } = this.props;
    return(

      <div>
        <FullTimeDetails
        infosent={this.props.courses}

        studentId = {studentId}

        isRegisteredCourse = {isRegisteredCourse}
        />


      </div>
    )
  }
}

export default FullTimeOn;
