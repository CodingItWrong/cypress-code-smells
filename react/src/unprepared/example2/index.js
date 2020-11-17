import React, {useState, useEffect} from 'react';

export default function Example2() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCount(10);
    }, 100);
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>Unprepared Element &gt; Example 2</h2>
      <p>
        {count === null ? (
          'Loading count…'
        ) : (
          <>
            Count: <span data-cy="count">{count}</span>
          </>
        )}
      </p>
      <button onClick={increment} data-cy="increment" disabled={count === null}>
        Increment
      </button>
    </>
  );
}
