import React, { useState } from "react";

export default function Form() {
  // Setting the initial values of form.username and form.password
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const inputchange= function(evt) {

  }

  const handlesubmit= function(evt) {
 evt.preventDefault();
setForm({
  username:'',
  password:''
})

  }
    return (
      <form onSubmit={handlesubmit}>
        <p>Username: {form.username}</p>
        <p>Password: {form.password}</p>
        <input
          type="text"
          placeholder="Username"
          name="user"
          value={form.username}
          onChange={inputchange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={inputchange}
        />
        <button>Submit</button>
      </form>
    );

}
