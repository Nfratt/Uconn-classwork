import React from "react";
import { connect } from 'react-redux'
import {Col, Row, Jumbotron} from 'react-bootstrap';




const Result = (props) => {
    return <Jumbotron>
    <Row>
      <Col className='text-center' style={{fontSize: '4rem'}}>{props.count}</Col>
    </Row>
  </Jumbotron>
};

/**
 * The connect() function connects a React component to a Redux store.
 * It provides its connected component with the pieces of the data it needs from the store, 
 * and the functions it can use to dispatch actions to the store.
 * It does not modify the component class passed to it; 
 * instead, it returns a new, connected component class that wraps the component you passed in.
 * 
 * @see {@link https://react-redux.js.org/api/connect}
 * 
 * What arguments must you pass here?
 */
export default connect(state =>
  

  // mapStatetoProps
  ({count:state.counter.count})

)(Result);