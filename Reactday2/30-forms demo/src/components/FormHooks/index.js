import React, { useState } from "react";
import "./style.css";

export default function Form() {

  const [names, setNames] = useState({
    firstName: "",
    lastName: ""
  });

  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    const newVals = {
      firstName: names.firstName,
      lastName: names.lastName
    };
    
    newVals[name] = value;
    setNames(newVals);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${names.firstName} ${names.lastName}`);
    setNames({
      firstName: "",
      lastName: ""
    });
  };

    return (
      <div>
        <p>
          (Hooks) Hello {names.firstName} {names.lastName}
        </p>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={names.firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={names.lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  };
