import React from 'react';
import axios from 'axios';
import { Menu, Dropdown, Icon, message} from 'antd';
import './instructorCourses.scss';

function InstructorCourses(props){

    return(
      props.courseInfo?<div className="courseInfo">
        <h1>{props.courseInfo.title}</h1>
        <p>Description:{props.courseInfo.description}</p>
        <p>Details:{props.courseInfo.details}</p>
        <p>Capacity:{props.courseInfo.capacity}</p>
    </div>:<p>You are not teaching any courses</p>
    )


}
export default InstructorCourses;
