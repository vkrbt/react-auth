import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      messages: [{ "_id": "59b00312d9350800e85e519a", "text": "1231321312", "user": { "_id": "59ace828b54962229ce81bb8", "name": "789" }, "time": 1504707346000 }, { "_id": "59b00314d9350800e85e519b", "text": "32131321321выпа", "user": { "_id": "59ace828b54962229ce81bb8", "name": "789" }, "time": 1504707348000 }, { "_id": "59b00315d9350800e85e519c", "text": "вавы", "user": { "_id": "59ace828b54962229ce81bb8", "name": "789" }, "time": 1504707349000 }, { "_id": "59b00316d9350800e85e519d", "text": "ывавыа", "user": { "_id": "59ace828b54962229ce81bb8", "name": "789" }, "time": 1504707350000 }, { "_id": "59b00317d9350800e85e519e", "text": "ываываываыва", "user": { "_id": "59ace828b54962229ce81bb8", "name": "789" }, "time": 1504707351000 }, { "_id": "59b00319d9350800e85e519f", "text": "ывыаыаыва", "user": { "_id": "59ace828b54962229ce81bb8", "name": "789" }, "time": 1504707353000 }, { "_id": "59b0031bd9350800e85e51a0", "text": "привет", "user": { "_id": "59ace828b54962229ce81bb8", "name": "789" }, "time": 1504707355000 }, { "_id": "59b0031cd9350800e85e51a1", "text": "чошлвоа", "user": { "_id": "59ace828b54962229ce81bb8", "name": "789" }, "time": 1504707356000 }, { "_id": "59b0031ed9350800e85e51a2", "text": "шгвшаг", "user": { "_id": "59ace828b54962229ce81bb8", "name": "789" }, "time": 1504707358000 }, { "_id": "59b0031fd9350800e85e51a3", "text": "шгшгшг", "user": { "_id": "59ace828b54962229ce81bb8", "name": "789" }, "time": 1504707359000 }, { "_id": "59b00321d9350800e85e51a4", "text": "гшгшг", "user": { "_id": "59ace828b54962229ce81bb8", "name": "789" }, "time": 1504707361000 }],
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

  sendKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.message.trim()) {
      this.send();
    }
  }

  render() {
    return (
      <div>
        <Scrollbars
          className="messages-container"
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            paddingTop: 90,
            paddingBottom: 50,
          }}
          onUpdate={Scrollbars.scrollToBottom}
        >
          <div className="container">
            {
              this.state.messages.map(message => (<Message
                key={message._id}
                message={message}
                userId={this.props.user.id}
              />))
            }
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

const mapStateToProps = (store) => ({
  user: store.userReducer,
});

export default connect(mapStateToProps)(Chat);
