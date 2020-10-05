import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadCountFromServer, increment} from './store/actions';

export default function Example3() {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const count = useSelector(state => state.example3);

  useEffect(() => {
    dispatch(loadCountFromServer);
  }, [dispatch]);

  const handleIncrement = () => {
    if (count === null) {
      setError('Tried to increment count before it was set!');
    } else {
      dispatch(increment());
    }
  };

  return (
    <>
      <h2>Unprepared Element &gt; Example 3</h2>
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
      <button onClick={handleIncrement} data-cy="increment">
        Increment
      </button>
    </>
  );
}
