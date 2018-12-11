import React from 'react';
import { Button } from 'antd/lib';

class InstructorPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <h1>Instructor Portal</h1>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    )
  }
}

export default InstructorPortal;
