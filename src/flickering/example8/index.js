import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadCountFromServer, increment} from './store/actions';

export default function Example8() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.example8.count);
  const loading = useSelector(state => state.example8.loading);

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
      <h2>Flickering Element &gt; Example 8</h2>
      <p>
        Count: <span data-cy="count">{count}</span>
      </p>
      <button onClick={handleIncrement} data-cy="increment">
        Increment
      </button>
    </>
  );
}
