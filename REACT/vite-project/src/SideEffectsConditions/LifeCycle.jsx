/*
•-useEffect-> effect<side effects>
--Life cycle hook
   -> get Born:rendered Initially: <when component is inserted>
   -> Lives:state changes when state changes.›
    -> Die:«componennt is removeds: <when the component gets removed›
*/
/*
1. conditional rendering.
component gets rendered because it meets a certain contions. rif statements›/*component gets rendered because it meets a certain condtions. 
‹if statements›
*/

/*useEffect (@param1, eparam2)
@parami:required. > call back function eparam2: dependency array: [3.
empty*/


import { useEffect, useState } from "react";

function LifeCycle() {
  const [n, setN] = useState(0);

  // 1. Runs after every render
  useEffect(() => {
    console.log("Component rendered");
  });

  // 2. Runs only once when the component mounts
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // 3. Runs whenever n changes
  useEffect(() => {
    console.log("n changed to:", n);
  }, [n]);

  return (
    <div>
      <button onClick={() => setN(n - 1)}>-</button>
      <b>{n}</b>
      <button onClick={() => setN(n + 1)}>+</button>

      <EvenOrOdd n={n} />
    </div>
  );
}

function EvenOrOdd({ n }) {
  if (n % 2 === 0) {
    return <EvenComponent />;
  }
  return <OddComponent />;
}

function EvenComponent() {
  return (
    <div>
      <h1>Even</h1>
    </div>
  );
}

function OddComponent() {
  return (
    <div>
      <h1>Odd</h1>
    </div>
  );
}

export default LifeCycle;
