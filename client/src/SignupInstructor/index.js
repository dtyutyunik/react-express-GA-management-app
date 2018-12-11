import React from 'react';

export default function SignupInstructor(props) {
  return (
    <div>
    <form onSubmit={props.onSignupInsSubmit} className="Form">
      <label>
      Full Name:
      <input type='text'
             name="fullname"
             value={props.name}
             onChange={props.onSignupInsChange}
      ></input>
      </label>
     <label>
     Username:
     <input type='text'
            name="username"
            value={props.name}
            onChange={props.onSignupInsChange}
     ></input>
     </label>
     <label>
     Password:
     <input type="password"
            name="password"
            value={props.password}
            onChange={props.onSignupInsChange}
     ></input>
     </label>
     <label>
     Authentication Code:
     <input type="text"
            name="authcode"
            value={props.authcode}
            onChange={props.onSignupInsChange}
      />
    </label>

     <button type="submit">Instructor Signup Here</button>
     </form>
    </div>
  )
}
