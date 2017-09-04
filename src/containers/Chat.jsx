import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import message from '../sockets/index';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      messages: [],
    };
  }

  messageHandler = (e) => {
    this.setState({ message: e.target.value });
  }

  send = () => {
    message.send(this.state.message);
    this.setState({
      message: '',
      messages: [...this.state.messages, this.state.message],
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map((message, i) => <li key={i}>{message}</li>)}
        </ul>
        <FormControl
          type="text"
          placeholder="Enter your message"
          onChange={this.messageHandler}
          value={this.state.message}
        />
        <Button onClick={this.send}>Send</Button>
      </div>
    );
  }
}

export default Chat;
