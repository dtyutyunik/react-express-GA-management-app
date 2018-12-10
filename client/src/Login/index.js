import React from 'react';

class Login extends React.Component {


  render() {
    return (
      <div>
        <label>
        username:
        <input type='text'></input>
        </label>
        <label>
        password:
        <input type="password"></input>
        </label>
        <button>Login Here</button>
      </div>
    )
  }
}
export default Login;
