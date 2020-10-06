import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {signOut, increment} from './store/actions';

export default function Example14() {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(state => state.example14.isSignedIn);
  const isSigningOut = useSelector(state => state.example14.isSigningOut);
  const guestCount = useSelector(state => state.example14.guestCount);
  const memberCount = useSelector(state => state.example14.memberCount);

  const handleSignOut = () => {
    dispatch(signOut);
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <>
      <p>
        {isSignedIn ? (
          <>
            Signed In
            <button onClick={handleSignOut} data-cy="sign-out">
              Sign Out
            </button>
          </>
        ) : (
          <span data-cy="signed-out">Signed Out</span>
        )}
      </p>
      <button
        onClick={handleIncrement}
        disabled={isSigningOut}
        data-cy="increment"
      >
        Increment
      </button>
      <p>
        Guest Count: <span data-cy="guest-count">{guestCount}</span>
      </p>
      <p>
        Member Count: <span data-cy="member-count">{memberCount}</span>
      </p>
    </>
  );
}
