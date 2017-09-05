import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';
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
      this.setState({
        message: '',
        messages: [...this.state.messages, message],
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
  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map(message => <Message key={message._id} message={message} />)}
        </ul>
        <FormControl
          type="text"
          placeholder="Enter your message"
          onChange={this.messageHandler}
          value={this.state.message}
        />
        <Button onClick={this.send} disabled={!this.state.message.trim()}>Send</Button>
      </div>
    );
  }
}

export default Chat;
