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
          <a href='#' target='_blank'><Button type='primary'>{this.props.userName}</Button></a>
          &nbsp;&nbsp;
          <Button type='ghost' onClick={this.props.logout}>Logout User</Button>
      </div>
      );
  }
}

// set username is required
Logout.propTypes = {
    userName: PropTypes.string.isRequired
};
