import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
//if already login
export default class Logout extends React.Component {
  constructor(props) {
  super(props);
    }
  render() {
    return (
      <div>
          <button type='ghost' >{this.props.username}</button>
          &nbsp;&nbsp;
          <Button type='ghost' onClick={this.props.logout}>Logout</Button>
      </div>
      );
  }
}
