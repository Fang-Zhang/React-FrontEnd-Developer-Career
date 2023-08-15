// What issue exits in the below code regarding state variable:

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <p>Counter: 0</p>
    </div>
  );
}

export default App;
