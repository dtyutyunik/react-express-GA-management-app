import React from 'react';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';

 function StudentDetails(props) {


  return (
    <div className="item">
      <div>{props.name}, {props.phone}, {props.email}</div>
    </div>
  )
}
 export default StudentDetails;
