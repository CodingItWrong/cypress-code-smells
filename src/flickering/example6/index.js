import React, {useState, useEffect} from 'react';

export default function Example6() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCount(27);
    }, 1000);
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  if (loading) {
    return <p>Loading…</p>;
  }

  return (
    <>
      <h2>Flickering Element &gt; Example 6</h2>
      <p>
        Count: <span data-cy="count">{count}</span>
      </p>
      <button onClick={increment} data-cy="increment">
        Increment
      </button>
    </>
  );
}
