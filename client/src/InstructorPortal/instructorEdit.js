import React from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001';
class InstructorEdit extends React.Component{
  constructor(props){
    super(props);
    this.state={
        fullname:`${props.instinfo.fullname}`,
        email: `${props.instinfo.email}`,
        phone:`${props.instinfo.phone}`
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange = (e) => {
const{ name, value } = e.target;
this.setState({
  [name]:value
  })
}

handleSubmit = async(e) => {
  e.preventDefault();
   console.log(this.state);
   await this.putInstructorEdit(this.state);
   this.props.setView('0');
}
async putInstructorEdit(passinstruct){
  console.log(passinstruct);
  console.log(this.props.instinfo.id);
const putinstructor = await axios.put(`${BASE_URL}/instructors/${this.props.instinfo.id}`,passinstruct)
}




render (){


  return (
      <form onSubmit={this.handleSubmit} className="InstructorEdit">
        <label>
          Name:
          <input type='text'
            name='fullname'
            value={this.state.fullname}
            onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange} />
        </label>
        <label>
          Phone:
          <textarea
            name='phone'
            value={this.state.phone}
            onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
   )
 }
}
export default InstructorEdit;
