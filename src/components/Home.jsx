import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Chat from '../containers/Chat.jsx';

function Home() {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>This is a simple hero unit,
          a simple jumbotron-style component for calling
          extra attention to featured content or information.
      </p>
      <p><Button bsStyle="primary">Learn more</Button></p>
      <Chat />
    </Jumbotron>
  );
}

export default Home;
