import React, { useState } from 'react';

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

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
        </div>
    </div>
    );
}