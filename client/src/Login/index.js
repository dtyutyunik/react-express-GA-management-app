import React from 'react';

function Login(props) {
    return (
      <div>
       <form onSubmit={props.onSubmit} className="StudentForm">
        <label>
        username:
        <input type='text'
               name="username"
               value={props.name}
               onChange={props.onChange}
        ></input>
        </label>
        <label>
        password:
        <input type="password"
               name="password"
               value={props.password}
               onChange={props.onChange}
        ></input>
        </label>

        <button>Signup Here</button>
        <button type="submit">Login Here</button>
        </form>
      </div>
    )
}
export default Login;
