import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import './App.scss';

import Control from './components/Control';
import Result from './components/Result';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Control />
        </Col>
      </Row>
      <Row>
        <Col>
          <Result />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
