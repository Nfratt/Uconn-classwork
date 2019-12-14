import React from "react";
import CounterClass from "./components/CounterClass";
import CounterHook from "./components/CounterHook";

function App() {
  return <React.Fragment>
    <CounterClass />
    <hr />
    <CounterHook />
    </React.Fragment>;
}

export default App;
