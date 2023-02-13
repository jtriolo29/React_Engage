import { useState } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount || 0);

  function increment() {
    return setCount(count + 1);
  }

  function decrement() {
    return setCount(count - 1);
  }

  function resetCount() {
    return setCount(initialCount || 0);
  }

  return [count, increment, decrement, resetCount];
}

export default useCounter;
