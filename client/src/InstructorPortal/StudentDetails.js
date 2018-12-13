import React from 'react';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';

 function StudentDetails(props) {


  return (
    <div className="item">
      {props.details.map(e=>{
      return (<div key={e.id}>
        <p>Name: {e.fullname}</p>
        <p>Email: {e.email}</p>
        <p>Phone: {e.phone}</p>
        <button>Kick Student Out</button>
      </div>)
      })}
    </div>
  )
}
 export default StudentDetails;
