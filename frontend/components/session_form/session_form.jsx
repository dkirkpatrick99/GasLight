import React from 'react';
import { NavLink } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
  
    if (this.props.formType === 'signup'){
    return (

      <div className="signup-pop">
        <div className="signup-content">
          <div className="top-modal">
              <div className="close" onClick={this.props.closeModal}>+</div>
              <h1>Welcome!</h1>
              <p>Sign Up to join MoneyWise</p>
          </div>
          <form onSubmit={this.handleSubmit}>

              <label>Username 
                  <input type="text" placeholder="Bill_Gates01" onChange={this.update('username')}/>
              </label>

              <label>Email
                  <input type="text" placeholder="Billy_G$@gmail.com" onChange={this.update('email')}/>
              </label>

              <label>Password
                  <input type="password" placeholder="DOMContentLoaded" onChange={this.update('password')}/>
              </label>

              <input className="signup-submit" type="submit" value="Create Account"/>

          </form>

          <div className="form-switch">
              <p>Already have an account? <a href=''>Log In</a></p>
          </div>
        </div>  
      </div>
    )} else {
      return (
      <div className="signup-pop">
      <div className="signup-content">
      <div className="top-modal">
          <div className="close" onClick={this.props.closeModal}>+</div>
          <h1>Welcome Back!</h1>
          <p>Sign In To Get Started</p>
      </div>
      <form onSubmit={this.handleSubmit}>

          <label>Username 
              <input type="text" placeholder="Bill_Gates01" onChange={this.update('username')}/>
          </label>

          <label>Email
              <input type="text" placeholder="Billy_G$@gmail.com" onChange={this.update('email')}/>
          </label>

          <label>Password
              <input type="password" placeholder="DOMContentLoaded" onChange={this.update('password')}/>
          </label>

          <input className="signup-submit" type="submit" value="Sign In"/>

      </form>

      <div className="form-switch">
          <p>Already have an account? <a href="#">Log In</a></p>
      </div>
      </div>
  </div>
      )}

  }
}

export default SessionForm;
