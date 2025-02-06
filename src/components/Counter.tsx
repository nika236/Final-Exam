import { useLocalStorage } from "../hooks/useStorage";

const Counter = () => {
  const [count, setCount] = useLocalStorage<number>("count", 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
