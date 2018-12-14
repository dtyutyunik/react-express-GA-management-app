import React from 'react';
import axios from 'axios';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';
import './studentDetails.scss' ;

const BASE_URL = "https://still-ridge-45074.herokuapp.com";

 function StudentDetails(props) {

   async function deleteStudent(e){
     const pull=await axios.delete(`${BASE_URL}/instructors/${props.instructorInfo}/student/${e.id}`);
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
