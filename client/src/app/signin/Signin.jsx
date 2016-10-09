import React from 'react';

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
  }
  handleLogin(e, username, password) {
    e.preventDefault();
    console.log(username.value, password.value);
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
        <input type="submit" onClick={e => this.handleLogin(e, username, password)}/>
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
        <input type="submit" onClick={e => this.handleSignup(e)}/>
      </form>
    );
    return (
      <div className="signin">
        { this.state.hasAccount ? Login : Signup }
      </div>
    );
  }
}

export default Signin;