import { Component } from 'react';
import AuthService from '../services/Auth';

//TODO: remake page
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleRegister() {
    this.setState({
      message: '',
      successful: false
    });

    AuthService.register(this.state.username, this.state.email, this.state.password).then(
      response => {
        console.log(response);
        this.setState({
          message: response.data.message,
          successful: true
        });
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    return (
      <div className="col-md-12">
        <form onSubmit={this.handleRegister}>
          <div className="form-group">
            <label htmlFor="username"> Username </label>
            <input type="text" value={this.state.username} onChange={this.handleUsername} />
          </div>
          <div className="form-group">
            <label htmlFor="email"> Email </label>
            <input type="text" value={this.state.email} onChange={this.handleEmail} />
          </div>
          <div className="form-group">
            <label htmlFor="password"> Password </label>
            <input type="text" value={this.state.password} onChange={this.handlePassword} />
          </div>
          <div className="form-group">
            <input type="submit" value='Submit' className="btn btn-primary btn-block"/>
          </div>
      </form>
      </div>
    );
  }
}