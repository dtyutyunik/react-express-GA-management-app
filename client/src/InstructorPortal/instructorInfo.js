import React from 'react';
import { Card } from 'antd';
import './instructorInfo.scss';

const BASE_URL = 'http://localhost:3001';
function InstructorInfo (props){
  return (
    <div id="instructorInfo" style={{ background: '#9ca7e2', padding: '60px',
    marginRright:'50px' }}>
      <Card className="instinfo"
            title="Instructor Profile"
            bordered={false} style={{ width: 500 },
          { marginLeft: 80 }}
        >
        <h2>Name: {props.instinfo.fullname}</h2>
        <p>Phone: {props.instinfo.phone}</p>
        <p>Email: {props.instinfo.email}</p>
        <p>Title: {props.instinfo.title}</p>
     </Card>
   </div>
 )
}

export default InstructorInfo;
