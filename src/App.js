import React, { useState, useEffect } from "react";
import Button from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0);
  const [valueToAdd, setValueToAdd] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!valueToAdd) return;
    setCount(count + valueToAdd);
    setValueToAdd(0);
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

      <AddForm
        valueToAdd={valueToAdd}
        setValueToAdd={setValueToAdd}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

function Counter({ count, increment, decrement }) {
  return (
    <div className="counter">
      <h2>Current Count: {count}</h2>

      <Button onClick={decrement}>decrement</Button>
      <Button onClick={increment}>increment</Button>
    </div>
  );
}

function AddForm({ valueToAdd, setValueToAdd, handleSubmit }) {
  return (
    <>
      <h2>Add a lot:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={valueToAdd || ""}
          onChange={(e) => setValueToAdd(parseInt(e.target.value))}
        />

        <Button type="submit">Add</Button>
      </form>
    </>
  );
}
