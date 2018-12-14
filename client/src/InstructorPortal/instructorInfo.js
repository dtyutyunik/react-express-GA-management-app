import React from 'react';


function InstructorInfo (props){

return(
  <div className="instinfo">

    <h3>Name:{props.instinfo.fullname}</h3>
    <h3>Phone:{props.instinfo.phone}</h3>
    <h3>Email:{props.instinfo.email}</h3>
    <h3>Title:{props.instinfo.title}</h3>
<button onClick={() => props.setView('edit')} >Edit</button>



  </div>

)}
export default InstructorInfo;
