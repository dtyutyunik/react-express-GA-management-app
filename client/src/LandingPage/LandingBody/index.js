import React from 'react';
import EachCourseDetails from './EachCourseDetails';
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
      {this.state.courses.map(e => (
        <EachCourseDetails
          key={e.id}
          id={e.id}
          title={e.title}
          details={e.details}
        />
      ))
      }
    </QueueAnim>
    </div>
     )
    )
  }
}
