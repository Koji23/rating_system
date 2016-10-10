import React from 'react';
import { connect } from 'react-redux';
import { signupUser, loginUser } from './signin_actions.js';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasAccount: true,
    };
    this.toggleForm = this.toggleForm.bind(this);
  }
  handleSignup(e, username, password, passwordConfirm) {
    e.preventDefault();
    console.log(username, password, passwordConfirm);
    if(password === passwordConfirm) {
      this.props.dispatchSignup(username, password);
    }
  }
  handleLogin(e, username, password) {
    e.preventDefault();
    this.props.dispatchLogin(username, password);
  }
  toggleForm() {
    this.setState({
      hasAccount: !this.state.hasAccount,
    })
  }
  render() {
    let username = '';
    let password = '';
    let passwordConfirm = '';
    const Login = (
      <form className="login">
        <h2>Log In</h2>
        <label>Username:</label>
        <input type="text" ref={node => username = node}/>
        <label>Password:</label>
        <input type="password" ref={node => password = node}/>
        <a href="#" onClick={this.toggleForm} >Don't yet have an account?</a>
        <input type="submit" value="Submit" onClick={e => this.handleLogin(e, username.value, password.value)}/>
      </form>
    );
    const Signup = (
      <form className="signup">
        <h2>Sign Up</h2>
        <label>Username:</label>
        <input type="text" ref={node => username = node}/>
        <label>Password:</label>
        <input type="password" ref={node => password = node}/>
        <label>Repeat Password:</label>
        <input type="password" ref={node => passwordConfirm = node}/>
        <a href="#" onClick={this.toggleForm} >Already have an account?</a>
        <input type="submit" value="Submit" onClick={e => this.handleSignup(e, username.value, password.value, passwordConfirm.value)}/>
      </form>
    );
    return (
      <div className="signin">
        { this.state.hasAccount ? Login : Signup }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSignup: (username, password) => {
      dispatch(signupUser(username, password));
    },
    dispatchLogin: (username, password) => {
      dispatch(loginUser(username, password))
    },
  };
}

export default connect(null, mapDispatchToProps)(Signin);




