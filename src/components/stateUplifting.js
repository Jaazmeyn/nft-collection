import React, { useState } from "react";
import ReactDOM from "react-dom";
// source:  https://codesandbox.io/s/oq587qpno9?file=/src/index.js:0-824
import "./styles.css";

function Counter(props) {
  const {
    count: [count, setCount]
  } = {
    count: useState(0),
    ...(props.state || {})
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Lifted state</h2>
      <Counter state={{ count: [count, setCount] }} />
      <Counter state={{ count: [count, setCount] }} />
      <h2>Isolated state</h2>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
