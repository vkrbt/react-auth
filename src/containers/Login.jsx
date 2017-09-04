import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';
import { login } from '../actions/login';

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
    });
  }

  passwordHandler = (e) => {
    this.setState({
      password: e.target.value,
      passwordIsValid: !!e.target.value,
    });
  }

  submitFrom = () => {
    this.props.login(this.state.login, this.state.password);
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

const mapStateToProps = store => ({
  loginState: store.loginReducer,
});

const mapDispatchToProps = dispatch => ({
  login: (name, pass) => dispatch(login(name, pass)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
