import React from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001';
class InstructorEdit extends React.Component{
  constructor(props){
    super(props);
    this.state={
      fullname:"",
      email: "",
      phone:"",
      title:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange = (e) => {
  // TODO: update state.formData when input fields change
const {name, value} = e.target;
// const name = e.target.name
// const value = e.target.value
this.setState(prevState => {
 return {
   formData: {
     ...prevState.formData,
     [name]: value
   }
 }
})
}

handleSubmit = async(e) => {
  e.preventDefault();
   console.log(this.state.formData);
   await this.instructoredit(this.state.formData);

}
async putInstructorEdit(){

}

async componentDidMount(){

}


render (){


  return (
    { // <form onSubmit={props.onSubmit} className=“InstructorEdit”>
     //   <label>
     //     Name:
     //     <input type=‘text’
     //       name=‘name’
     //       value={props.name}
     //       onChange={props.onChange} />
     //   </label>
     //   <label>
     //     Email:
     //     <input
     //       type=‘text’
     //       name=‘Email’
     //       value={props.hometown}
     //       onChange={props.onChange} />
     //   </label>
     //   <label>
     //     Phone:
     //     <textarea
     //       name=‘phone’
     //       value={props.bio}
     //       onChange={props.onChange} />
     //   </label>
     //   <label>
     //     Title:
     //     <textarea
     //       name=‘title’
     //       value={props.bio}
     //       onChange={props.onChange} />
     //   </label>
     //   <button type=“submit”>Submit</button>
     // </form>
   }
   )
 }
}
export default InstructorEdit;
