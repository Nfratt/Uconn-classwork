import React, { useState } from 'react';

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
// 1st is the value the second is what you call to change the value
    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
            Click Counter! (hook component)
            </div>
        <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
            Increment
        </button>
        &nbsp;
        <button className="btn btn-danger" onClick={() => setCount(count - 1 )}>
            Decrament
        </button>
        </div>
    </div>
    );
}