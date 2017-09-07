import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import Fa from 'react-fontawesome';
import socket, { subscribe } from '../sockets/index';
import Message from '../components/Message';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.props.subscribe(socket);
  }

  messageHandler = (e) => {
    this.setState({ message: e.target.value });
  }

  send = () => {
    socket.emit('message', this.state.message.trim());
    this.setState({ message: '' });
  }

  sendKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.message.trim()) {
      this.send();
    }
  }

  render() {
    return (
      <div>
        <div className="messages-container">
          <Scrollbars
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: 80,
            }}
          >
            <div className="container">
              {
                this.props.messages.map(message => (<Message
                  key={message._id}
                  message={message}
                  userId={this.props.user.id}
                />))
              }
            </div>
          </Scrollbars>
        </div>
        <div className="message-input">
          <div className="container">
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Enter your message"
                onChange={this.messageHandler}
                value={this.state.message}
                onKeyPress={this.sendKeyPress}
              />
              <InputGroup.Button>
                <Button onClick={this.send} disabled={!this.state.message.trim()}><Fa name="paper-plane" /></Button>
              </InputGroup.Button>
            </InputGroup>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.userReducer,
  messages: store.messagesReducer.messages,
});

const mapDispatchToProps = dispatch => ({
  subscribe: socket => subscribe(socket)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
