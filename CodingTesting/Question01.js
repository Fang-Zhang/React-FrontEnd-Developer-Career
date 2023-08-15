// What will be the output of the following code?

import React from 'react';

function Question01() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Component rendered successfully");
  }, []);

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <p>You clicked {count} times</p>
    </div>
  )
}