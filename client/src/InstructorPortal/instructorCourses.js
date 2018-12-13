import React from 'react';
import axios from 'axios';
import { Menu, Dropdown, Icon, message} from 'antd';

function InstructorCourses(props){

console.log(props.courseInfo);
    return(
      props.courseInfo?<div>
        <h1>{props.courseInfo.title}</h1>
        <p>Description:{props.courseInfo.description}</p>
        <p>Details:{props.courseInfo.details}</p>
        <p>Capacity:{props.courseInfo.capacity}</p>
    </div>:<p>You are not teaching any courses</p>
    )


}
export default InstructorCourses;
