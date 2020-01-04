import React from "react";
import { connect } from 'react-redux'
import { Col, Row, Jumbotron, Button } from 'react-bootstrap';

import { onIncrementClick, onDecrementClick } from '../redux/actions'


const Control = (props) => {
    return <Jumbotron>
        <Row>
            {/* Fill in the onClick handlers.  What replaces null? */}
            <Col className='text-center'><Button onClick={null}>+</Button></Col>
            <Col className='text-center'><Button onClick={null}>-</Button></Col>
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
export default connect(

)(Control);