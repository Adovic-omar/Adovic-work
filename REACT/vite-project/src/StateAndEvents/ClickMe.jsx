/*
State->
when state changes, everywhere that state is being used it changes automatically.
*/
import { useState } from "react";

function ClickMe() {
    /*
    const [name, set‹name›]=useState([initial value]) 
    const [@param1, @param2]=useState(@inititalState‹starting state 
    @param1-›the current state:<initger, array› 
    @param2-› function to update the state..
      @param2 (newState)->
*/
  // State
  const [n, setN] = useState(0);

  // Increase count
  const increment = () => {
    setN(n + 1);
  };

  // Decrease count
  const decrement = () => {
    setN(n - 1);
  };

  // Change state to a string
  const spoil = () => {
    setN("Cats and dogs");
  };

  // Reset state
  const reset = () => {
    setN(0);
  };

  return (
    <div>
      <h4>Clicked {n}</h4>

      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={spoil}>Spoil</button>
        <button onClick={reset}>Reset</button>
      </div>

      <h4>Clicked {n}</h4>
    </div>
  );
}

export default ClickMe;
