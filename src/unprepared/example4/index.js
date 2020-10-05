import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadCountFromServer, increment} from './store/actions';

export default function Example1() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.example4);

  useEffect(() => {
    dispatch(loadCountFromServer);
  }, [dispatch]);

  const handleIncrement = () => {
    dispatch(increment());
  };

  if (count === null) {
    return <p>Loading…</p>;
  }

  return (
    <>
      <h2>Example 1</h2>
      <p>
        {count === null ? (
          'Loading count…'
        ) : (
          <>
            Count: <span data-cy="count">{count}</span>
          </>
        )}
      </p>
      <button
        onClick={handleIncrement}
        data-cy="increment"
        disabled={count === null}
      >
        Increment
      </button>
    </>
  );
}
