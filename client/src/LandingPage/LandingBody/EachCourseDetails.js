import React from 'react';
import './EachCourseDetails.scss';
import '../../images/wdi.jpeg';
import { Button, message } from 'antd';
export default class EachCourseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseImgArr: ['../../images/wdi.jpeg']
    }
  }
  handleEnrollClick() {
    message.error(`please register and login first`)
  }
  render() {
    return (
      <div key={this.props.key}
           id={this.props.id}
           className={`landing${this.props.id}`}
      >
        {/*<img src={this.state.courseImgArr[this.props.id]} />*/}
        {/*<img src={'../../images/wdi.jpeg'} />*/}
        {/*<img src= "https://goo.gl/images/DYTQDE" />*/}
        <h1>{this.props.title}</h1>
        <p>{this.props.details}</p>
        <Button type="primary"
                className="enroll"
                onClick={this.handleEnrollClick}
                >Enroll</Button>
      </div>
    )
  }
}
