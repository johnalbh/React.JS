import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}> Click Here !</button>
    </div>
  );
}
