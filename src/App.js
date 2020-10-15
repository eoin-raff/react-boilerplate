import React, { useState } from "react";

export default function App(props) {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <h1>Hello World.</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </React.Fragment>
  );
}