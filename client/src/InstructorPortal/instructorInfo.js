import React from 'react';
const BASE_URL = 'http://localhost:3001';

function InstructorInfo (props){

return(
  <div className="instinfo">

    <h3>Name:{props.instinfo.fullname}</h3>
    <h3>Phone:{props.instinfo.phone}</h3>
    <h3>Email:{props.instinfo.email}</h3>
    <h3>Title:{props.instinfo.title}</h3>

    


  </div>

)}
export default InstructorInfo;
