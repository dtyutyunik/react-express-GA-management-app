import React from 'react';
import { List, Avatar, Icon } from 'antd';

class FullTimeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    }
  }


  render() {
    const listData = [];
    for (let i = 0; i < 1; i++) {
    listData.push({
      href: 'http://ant.design',
      title: `Yo`,
      avatar: '',
      description: 'Sup bruh',
      content: 'I am dope',
    });
  }

  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );


  return (

  <div className="item">

    <List
  itemLayout="vertical"
  size="large"
  dataSource={listData}
  renderItem={item => (
    <List.Item
      key={item.title}
      actions=
        {[<IconText type="star-o" text="156" />,
        <IconText type="like-o" text="156" />,
        <IconText type="message" text="2" />]}
      extra=
        {<img width={272}
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
    >
      <List.Item.Meta
        avatar={<Avatar src={item.avatar} />}
        title={<a href={item.href}>{item.title}</a>}
        description={item.description}
      />
      {item.content}
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
