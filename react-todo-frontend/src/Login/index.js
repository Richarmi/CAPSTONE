import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const loginResponse = await fetch('http://localhost:9000/auth/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await loginResponse.json();

    if(parsedResponse.data === 'login successful'){
      // switch our route
      // Programmatically switching to a new route
      this.props.history.push('/gifs');
    }
    console.log(parsedResponse, ' this is the response from our express api')
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' onChange={this.handleChange} />
        </label>
        <label>
          password:
          <input type='password' name='password' onChange={this.handleChange} />
        </label>
        <input type="Submit" value="Login" />
      </form>
    )
  }
}

export default Login;
