import useCounter from "./hooks/useCounter";

function Counter() {
  const [count, increment, decrement, resetCount] = useCounter(0);

  return (
    <div className="m-auto flex flex-col content-center">
      <p className="text-5xl font-bold text-center m-4">The count is {count}</p>
      <div className="flex justify-center">
        <button
          className="font-bold text-4xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mx-2"
          onClick={increment}
        >
          +
        </button>
        <button
          className="font-bold text-4xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mx-2"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="font-bold text-4xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mx-2"
          onClick={resetCount}
        >
          Reset Count
        </button>
      </div>
    </div>
  );
}

export default Counter;
