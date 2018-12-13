import React from 'react';
import axios from 'axios';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';
const BASE_URL = 'http://localhost:3001';

 function StudentDetails(props) {

   async function deleteStudent(e){
     console.log(props.instructorInfo);
     // const pull=await axios.delete(`${BASE_URL}/instructors/${props.students[].course_id}/student/${e.id}`);
     const pull=await axios.delete(`${BASE_URL}/instructors/${props.instructorInfo}/student/${e.id}`);
     console.log(e.fullname, 'has been clicked');
     console.log(e.id, 'has been clicked');

     await props.renderStudent();
   };




  return (
    <div className="item">
      {props.students.map(e=>{
      return (<div className="studentList" key={e.id}>
        <p>Name: {e.fullname}</p>
        <p>Email: {e.email}</p>
        <p>Phone: {e.phone}</p>
      <button onClick={()=>deleteStudent(e)}>Kick Student Out</button>
      </div>)
      })}
    </div>
  )
}
 export default StudentDetails;
