import React from 'react';
import QueueAnim from 'rc-queue-anim';
import './index.scss';
import {
  getAllCourses,

} from '../../services/courseAPIService.js';

export default class LandingBody extends React.Component {
  constructor(props){
    super(props);

    this.state={
      courses: []
    }
  }

  async componentDidMount() {
    const allCourses = await getAllCourses();
    this.setState({
      courses: allCourses
    });
  }

  render() {
    return (
    (<div className="course-list">
      <QueueAnim className="landAnimate">
      <div key="d1" className="landing-card card-1">Web Development Immersive</div>
      <div key="d2" className="landing-card card-2">User Experience Design Immersive</div>
      <div key="d3" className="landing-card card-3">Data Science Immersive</div>
      <div key="d4" className="landing-card card-4">Digital Marketing Immersive</div>
    </QueueAnim>
    </div>
     )
    )
  }
}
