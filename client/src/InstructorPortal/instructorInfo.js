import React from 'react';

import { Card, Button } from 'antd';
import './instructorInfo.scss';

const BASE_URL = "https://still-ridge-45074.herokuapp.com";
function InstructorInfo (props){
  return (
    <div id="instructorInfo" style={{ background: '#9ca7e2', padding: '80px',
    paddingRight:'200px' }}>
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
   <Button type="primary"
           onClick={() => props.setView('edit')
           }
           style={{marginRight: '200px', marginTop: '22px'}}
           >Edit Profile</Button>
    </div>
 )
}

export default InstructorInfo;
