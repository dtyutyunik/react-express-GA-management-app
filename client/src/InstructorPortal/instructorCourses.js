import React from 'react';
import axios from 'axios';
import { Menu, Dropdown, Icon, message} from 'antd';

class InstructorCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.courseInfo
    }
    console.log(this.state.info);
  }

handleSubmit(e){
  e.preventDefault();
  console.log(e.target);
}


  render() {
    return (this.state.info?
      <div>
        <h1>{this.state.info.title}</h1>
      <form>
  <div>
        <input type="text"
          value={this.state.info.description}/>
        <input type="submit"
            onClick={this.handleSubmit}
            />
        </div>
      <div>
        <input type="text"
          value={this.state.info.details} />
        <button onClick={this.handleSubmit}>click to edit</button>
      </div>

</form>

      <p>{this.state.info.capacity}</p>
  </div>:"Looks like you are not teaching a course"
    )
  }
}
export default InstructorCourses;
