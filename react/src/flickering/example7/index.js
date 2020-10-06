import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadCountFromServer, increment} from './store/actions';

export default function Example7() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.example7.count);
  const loading = useSelector(state => state.example7.loading);

  useEffect(() => {
    dispatch(loadCountFromServer);
  }, [dispatch]);

  const handleIncrement = () => {
    dispatch(increment());
  };

  if (loading) {
    return <p>Loading…</p>;
  }

  return (
    <>
      <h2>Flickering Element &gt; Example 7</h2>
      <p>
        Count: <span data-cy="count">{count}</span>
      </p>
      <button onClick={handleIncrement} data-cy="increment">
        Increment
      </button>
    </>
  );
}
