import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Grid, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import Fa from 'react-fontawesome';
import getUser from './actions/user';
import { logout } from './actions/login';

class App extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.getUser();
    }
  }
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>
                NodeAuth
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {this.props.isLoggedIn ?
              <Navbar.Text pullRight>
                Hello, {this.props.user.success ? this.props.user.name : <Fa name="cog" spin />}
                <Navbar.Link onClick={this.props.logout}> Logout</Navbar.Link>
              </Navbar.Text>
              :
              <Nav pullRight>
                <LinkContainer to={'/login'}>
                  <NavItem>Login</NavItem>
                </LinkContainer>
                <LinkContainer to={'/register'}>
                  <NavItem>Register</NavItem>
                </LinkContainer>
              </Nav>
            }
          </Navbar.Collapse>
        </Navbar>
        <Grid bsClass="container">
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isLoggedIn: !!store.loginReducer.token,
  user: store.userReducer,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
