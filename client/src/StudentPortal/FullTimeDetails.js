import React from 'react';
import { Button, List, Avatar, Icon, message } from 'antd';
import axios from 'axios';
import { registerStudent } from '../services/courseAPIService';

const BASE_URL = "https://still-ridge-45074.herokuapp.com";

class FullTimeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      registerOrNot: props.isRegistered,
      applyBtn: '',

    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    if (this.state.registerOrNot) {
      this.setState ({
        applyBtn: 'Already A BS Student'
      })
    } else {
      this.setState ({
        applyBtn: 'Apply Now'
      })
    }
  }
  async handleClick(e) {
    let courseId = e.target.id
    let studentId = this.props.studentId
    const response = await this.registerStudent(courseId, studentId);
    if (response.id) {
      message.success(`You have successfully registered for this course`);
      this.setState({
        registerOrNot: true,
        applyBtn:'Already A BS Student'
      })
    } else {
      message.error(response);
      this.setState({
        registerOrNot: false,
        applyBtn: 'Apply Now'
      })
    }
  }


  async registerStudent(courseId, studentId) {
    const response = await registerStudent(courseId, studentId)
    return response;
  }


  render() {
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} />
      {text}
    </span>
  );

  let applyBtn;
  if(this.state.registerOrNot) {
    applyBtn = 'Already A BS Student'
  } else {
    applyBtn = 'Apply Now'
  }

  return (

  <div className="item">

    <List
  itemLayout="vertical"
  size="medium"
  dataSource={this.props.infosent}
  renderItem={props => (
    <List.Item
      key={props.id}

      actions=
        {[<IconText type="star-o" text="156" />,
        <IconText type="like-o" text="156" />,
        <IconText type="message" text="2" />,
        <Button onClick = {this.handleClick}
                key={props.id}
                id={props.id}
                className= "register"
                type="primary">{this.state.applyBtn}
                </Button>]}
      extra=
        {<img width={272}
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
    >
      <List.Item.Meta
        title={props.title}
        description={props.description}
      />
    </List.Item>
  )}
/>


    </div>
    )
  }
}

 export default FullTimeDetails;
