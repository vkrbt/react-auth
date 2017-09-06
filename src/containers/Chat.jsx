import React, { Component } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import Fa from 'react-fontawesome';
import socket from '../sockets/index';
import Message from '../components/Message';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      messages: [],
    };
  }

  componentDidMount() {
    socket.on('message', (message) => {
      console.log(message);
      this.setState({
        message: '',
        messages: [message, ...this.state.messages],
      });
    });
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
        <Scrollbars style={{ position: 'absolute', left: 0, height: '80%' }} onUpdate={this.scrollToBottom}>
          <div className="container">
            {this.state.messages.map(message => <Message key={message._id} message={message} />)}
          </div>
        </Scrollbars>
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

export default Chat;
