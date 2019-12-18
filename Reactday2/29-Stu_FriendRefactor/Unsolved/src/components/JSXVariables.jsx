import React from "react";
const name = "Nick";
const thought= " is pretty cool"
const vowl =" Nck"
function JSXVariables() {
  return (
<div className="main-container" style={{backgroundColor: 'blue'}}>
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>my name without vowels {vowl} </h2>
          <h2>I think React{thought}</h2>
          
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
