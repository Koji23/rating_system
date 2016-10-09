import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasAccount: true,
    };
    this.toggleForm = this.toggleForm.bind(this);
  }
  handleSignup() {

  }
  handleLogin() {

  }
  toggleForm() {
    this.setState({
      hasAccount: !this.state.hasAccount,
    })
  }
  render() {
    const Login = (
      <form className="login">
        <input type="text" />
        <input type="password" />
        <a href="#" onClick={this.toggleForm} >Don't yet have an account?</a>
      </form>
    );
    const Signup = (
      <form className="signup">
        <input type="text" />
        <input type="password" />
        <input type="password" />
        <a href="#" onClick={this.toggleForm} >Already have an account?</a>
      </form>
    );
    return (<div>{ this.state.hasAccount ? Login : Signup }</div>);
  }
}

export default Signin;