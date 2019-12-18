import React from "react";
import SearchResultContainerClass from "./components/SearchResultContainerClass";
import SearchResultContainerHooks from "./components/SearchResultContainerHooks";

function App() {

  const searchDivStyles = {
    flex: '1 1 100%',
      margin: '1vw'
  };

  return <div
    style={{
      display: 'flex',
      width: '100vw'
  }}
  >
      <div style={searchDivStyles}>
        <h2>Class Based Example</h2>
        <SearchResultContainerClass />
      </div>
      <div style={searchDivStyles}>
      <h2>Hooks Based Example</h2>
      <SearchResultContainerHooks />
      </div>
    </div>;
}

export default App;
