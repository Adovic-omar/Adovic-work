/*
 create a form to
 name, email, phone, password.
 have a submit button that console. logs the values when form submited.
 after the form have a list to show the state
 changes as user is typing for each.
 for all the input fields use only
 1 state variable.
 example [input, setInput]=useState(<object:hint>)
-› it stores other data types.
20 minutes.
*/

import { useState } from "react";

function Form2.0() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={input.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={input.phone}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <ul>
        <li>Name: {input.name}</li>
        <li>Email: {input.email}</li>
        <li>Phone: {input.phone}</li>
        <li>Password: {input.password}</li>
      </ul>
    </>
  );
}

export default Form2.0;