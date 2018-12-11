import React from 'react';

export default function Signup(props) {
  return (
    <div>
    <form onSubmit={props.onSignupSubmit} className="StudentForm">
      <label>
      Full Name:
      <input type='text'
             name="fullname"
             value={props.name}
             onChange={props.onSignupChange}
      ></input>
      </label>
     <label>
     Username:
     <input type='text'
            name="username"
            value={props.name}
            onChange={props.onSignupChange}
     ></input>
     </label>
     <label>
     Password:
     <input type="password"
            name="password"
            value={props.password}
            onChange={props.onSignupChange}
     ></input>
     </label>
     <button type="submit">Signup Here</button>
     </form>
    </div>
  )
}
