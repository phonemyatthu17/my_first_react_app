import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <div className="App">
      <button onClick={() => alert("clicked")}>-</button>
      <h1>{counter}</h1>
      <button>+</button>
    </div>
  );
}

export default App;
