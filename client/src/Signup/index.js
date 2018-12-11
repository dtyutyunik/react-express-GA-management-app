import React from 'react';

export default function Signup(props) {
  return (
    <div>
    <form onSubmit={props.onSignupSubmit} className="StudentForm">
     <label>
     username:
     <input type='text'
            name="username"
            value={props.name}
            onChange={props.onSignupChange}
     ></input>
     </label>
     <label>
     password:
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
