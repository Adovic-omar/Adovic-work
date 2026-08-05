/*HOW
to handle form input and events
*/
import { useState } from "react";

function Form() {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle name change
  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  // Handle submit
  const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("Name is", name);
    console.log("Email is", email);
    console.log("Password is", password);
  };

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input
            value={name}
            onChange={nameOnChange}
          />
        </div>
      </main>

      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </main>

      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </main>

      <button onClick={onSubmit}>Submit</button>

      {/* Displaying data */}
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Password: {password}</li>
      </ul>
    </div>
  );
}

export default Form;
