import React, {useState, useEffect} from 'react';

export default function Example1() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCount(27);
    }, 1000);
  }, []);

  const increment = () => {
    if (count === null) {
      setError('Tried to increment count before it was set!');
    } else {
      setCount(count + 1);
    }
  };

  return (
    <>
      <h2>Unprepared Element &gt; Example 2</h2>
      {error && <p>{error}</p>}
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
