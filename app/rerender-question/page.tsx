"use client"
import { useState } from "react";

function Counter({ id }) {
  const [count, setCount] = useState(0);

  return (
    <div key={id}> {/* Если id меняется, компонент пересоздаётся */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default function App() {
  const [key, setKey] = useState(1);

  return (
    <div>
      <button onClick={() => setKey(key + 1)}>Change Key</button>
      <Counter id={key} />
    </div>
  );
}
