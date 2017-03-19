import React, { Component } from 'react';
import './login.css';

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: 'Luke Skywalker',
      password: '19BBY',
    }
  }
  handleChange = (ev) => {
    const newObj = {};
    newObj[ev.target.name] = ev.target.value;
    this.setState(newObj);
  }
  submitForm = (ev) => {
    ev.preventDefault();
    this.props.submitCallback(this.state.username, this.state.password);
  }
  render() {
    return (
      <div className="login-container">
        <form onSubmit={ this.submitForm }>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LoginContainer;
