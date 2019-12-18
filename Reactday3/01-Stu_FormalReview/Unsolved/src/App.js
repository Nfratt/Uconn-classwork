import React from "react";
import FormClass from "./components/FormClass";
import FormHooks from "./components/FormHooks";

function App() {
  return <div>
    <h3>Form built with class component</h3>
    <FormClass />
    <hr />
    <h3>Form built with function component that uses the useState hook</h3>
    <FormHooks />
    </div>;
}

export default App;
