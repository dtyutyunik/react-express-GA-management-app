import React from 'react';
import { Card, Button } from 'antd';

const BASE_URL = 'https://polar-refuge-58258.herokuapp.com';

function StudentInfo (props){

return(

  <div id='studentInfo' style={{ background: '#9ca7e2', padding: '60px',
    paddingRight: '200px',
  marginRright: '30px' }}>
    <Card className = 'stuinfo'
          title = 'My Profile'
          bordered={false} style={{ width: 500 },
        { marginLeft: 80 }}
      >
    <h3>Name: {props.studentProfile.fullname}</h3>
    <h3>Phone: {props.studentProfile.phone}</h3>
    <h3>Email: {props.studentProfile.email}</h3>
    </Card>

    <Button type="primary"
            style={{ margin: "20px" }}
            onClick={() => props.setView('Stedit')} >Edit</Button>



  </div>

)}
export default StudentInfo;
