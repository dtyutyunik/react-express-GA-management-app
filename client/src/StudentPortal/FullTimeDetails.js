import React from 'react';
import { Button, List, Avatar, Icon } from 'antd';

class FullTimeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  handleClick = (e) => {
  console.log(this.props.courseId)
  console.log(this.props.studentId)
  }


  render() {
console.log(this.props.studentId)
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} />
      {text}
    </span>
  );

  return (

  <div className="item">

    <List
  itemLayout="vertical"
  size="medium"
  dataSource={this.props.title}
  renderItem={props => (
    <List.Item
      key={this.props.id}
      // courseId={this.props.id}
      actions=
        {[<IconText type="star-o" text="156" />,
        <IconText type="like-o" text="156" />,
        <IconText type="message" text="2" />,
        <Button onClick = {this.handleClick}
                key={this.props.id}
                className= "register"
                type="primary">Apply Now</Button>]}
      extra=
        {<img width={272}
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
    >
      <List.Item.Meta
        title={this.props.title}
        description={this.props.description}
      />
    </List.Item>
  )}
/>
      <h1>{this.props.title}</h1>
      <h2>{this.props.description}</h2>
      <p>{this.props.details}</p>
      <h3>{this.props.price}</h3>

    </div>
    )
  }
}

 export default FullTimeDetails;
