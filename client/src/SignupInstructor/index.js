import React from 'react';

export default function SignupInstructor(props) {
  return (
    <div>
    <form onSubmit={props.onSignupInsSubmit} className="Form">
     <label>
     username:
     <input type='text'
            name="username"
            value={props.name}
            onChange={props.onSignupInsChange}
     ></input>
     </label>
     <label>
     password:
     <input type="password"
            name="password"
            value={props.password}
            onChange={props.onSignupInsChange}
     ></input>
     </label>
     <label>
     authentication code:
     <input type="text"
            name="authcode"
            value={props.authcode}
            onChange={props.onSignupInsChange}
      />
    </label>
    <label>
    email address:
    <input type='text'
           name='email'
           value={props.email}
           onChange={props.onSignupInsChange}
      />
     </label>
     <button type="submit">Instructor Signup Here</button>
     </form>
    </div>
  )
}
