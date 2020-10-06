import React, {useState} from 'react';
import axios from 'axios';

export default function Example11() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [guestCount, setGuestCount] = useState(27);
  const [memberCount, setMemberCount] = useState(42);

  const signOut = () => {
    setIsSigningOut(true);
    axios.delete('http://localhost:3001/sessions/1').then(() => {
      setIsSignedIn(false);
      setIsSigningOut(false);
    });
  };

  const increment = () => {
    if (isSignedIn) {
      setMemberCount(memberCount + 1);
    } else {
      setGuestCount(guestCount + 1);
    }
  };

  return (
    <>
      <p>
        {isSignedIn ? (
          <>
            Signed In
            <button onClick={signOut} data-cy="sign-out">
              Sign Out
            </button>
          </>
        ) : (
          'Signed Out'
        )}
      </p>
      <button onClick={increment} disabled={isSigningOut} data-cy="increment">
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
