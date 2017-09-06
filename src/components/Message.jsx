import React from 'react';
import moment from 'moment';

function Message(props) {
  return (
    <div className="message-container clearfix">
      <div className={`message${props.userId === props.message.user._id ? ' message--my' : ''}`}>
        <div className="message__header">
          <span className="message__username">{props.message.user.name}</span>
          <span className="message__time">{moment(props.message.time).format('DD.MM HH:mm')}</span>
        </div>
        <div className="message__body">
          {props.message.text}
        </div>
      </div>
    </div>
  );
}


export default Message;
