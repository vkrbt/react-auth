import React from 'react';
import { Panel } from 'react-bootstrap';

function Message(props) {
  return (
    <Panel
      header={props.message.userId}
      footer={<div>{props.message.time}</div>}
    >
      {props.message.text}
    </Panel>
  );
}


export default Message;
