import React from 'react';
import { Card } from 'antd';

const BASE_URL = 'http://localhost:3001';

function StudentInfo (props){

return(

  <div id='studentInfo' style={{ background: '#9ca7e2', padding: '60px',
  marginRright: '50px' }}>
    <Card className = 'stuinfo'
          title = 'My Profile'
          bordered={false} style={{ width: 500 },
        { marginLeft: 80 }}
      >
    <h3>Name: {props.studentProfile.fullname}</h3>
    <h3>Phone: {props.studentProfile.phone}</h3>
    <h3>Email: {props.studentProfile.email}</h3>
    </Card>

  </div>

)}
export default StudentInfo;
