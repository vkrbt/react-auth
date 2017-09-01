import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';
import register from './api/register';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
      loginIsValid: null,
      passwordIsValid: null,
    };
  }

  loginHandler = (e) => {
    this.setState({
      login: e.target.value,
      loginIsValid: !!e.target.value,
    });
  }

  passwordHandler = (e) => {
    this.setState({
      password: e.target.value,
      passwordIsValid: e.target.value.length ? true : null,
    });
  }

  getButtonDisableState = () => !(
    this.state.loginIsValid && this.state.passwordIsValid
  )

  submitFrom = async () => {
    try {
      const res = await register(this.state.login, this.state.password);
      if (res.ok) {
        alert(`You're succesfuly registered`);
      } else {
        alert(`User already exist`);
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
            <FormControl autoFocus type="text" onChange={this.loginHandler} value={this.state.login} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" onChange={this.passwordHandler} value={this.state.password} />
          </FormGroup>
          <FormGroup>
            <Button bsSize="large" bsStyle="primary" onClick={this.submitFrom} disabled={this.getButtonDisableState()}>Register</Button>
          </FormGroup>
        </form>
      </Col>
    );
  }
}

export default Register;
