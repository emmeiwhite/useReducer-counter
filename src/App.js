import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  useEffect(function () {
    document.title = "Counter useReducer";
  }, []);

  return (
    <div className="app">
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
      />

      <AddForm />
    </div>
  );
}

function Counter({ count, increment, decrement }) {
  return (
    <div className="counter">
      <h2>Current Count: {count}</h2>

      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
    </div>
  );
}

function AddForm() {
  const [valueToAdd, setValueToAdd] = useState(0);
  return (
    <>
      <h2>Add a lot:</h2>
      <form>
        <input
          type="number"
          value={valueToAdd || ""}
          onChange={(e) => setValueToAdd(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
}
