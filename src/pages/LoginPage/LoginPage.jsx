import React, { Component } from 'react';
import './LoginPage.css';
import * as userAPI from '../../services/user-api';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userAPI.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/paintlist');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <header className="title">
          <h2>Sign In</h2>
        </header>
        <center>
        <form onSubmit={this.handleSubmit} >
          <div>
            <input 
              className="input"
              autoComplete="off"
              type="email" 
              placeholder="Email"
              value={this.state.email} 
              name="email" 
              onChange={this.handleChange} 
            />
          </div>
          <br></br>
          <div>
            <input
              className="input"
              autoComplete="off"
              type="password"
              placeholder="Password" 
              value={this.state.pw} 
              name="pw" 
              onChange={this.handleChange} 
            />
          </div>
          <br></br>
          <div>
            <button className="btn">SIGN IN</button>
            &nbsp;&nbsp;&nbsp;
            <input
              type="submit"
              value="CANCEL"
              className="btn"
            >
            </input>
          </div>
        </form>
        </center>
      </div>
    )
  }
};

export default LoginPage;
