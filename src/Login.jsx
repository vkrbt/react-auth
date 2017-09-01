import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';
import login from './api/login';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
      loginIsValid: null,
      passwordIsValid: null,
    };
  }
  getButtonDisableState = () => !(this.state.loginIsValid && this.state.passwordIsValid);

  loginHandler = (e) => {
    this.setState({
      login: e.target.value,
      loginIsValid: !!e.target.value,
    })
  }

  passwordHandler = (e) => {
    this.setState({
      password: e.target.value,
      passwordIsValid: !!e.target.value,
    });
  }

  submitFrom = async () => {
    try {
      const res = await login(this.state.login, this.state.password);
      if (res.ok) {
        try {
          const data = await res.json();
          localStorage.setItem('token', `JWT ${data.token}`);
        } catch (err) {
          console.error(err);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
        <form>
          <FormGroup>
            <ControlLabel>Login</ControlLabel>
            <FormControl autoFocus type="text" onChange={this.loginHandler} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" onChange={this.passwordHandler} value={this.state.password} />
          </FormGroup>
          <Button
            bsSize="large"
            bsStyle="primary"
            onClick={this.submitFrom}
            disabled={this.getButtonDisableState()}
          >
            Login
          </Button>
        </form>
      </Col>
    );
  }
}


export default Login;
