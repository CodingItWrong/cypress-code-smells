import React, {useState} from 'react';
import axios from 'axios';

export default function Example10() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [guestCount, setGuestCount] = useState(27);
  const [memberCount, setMemberCount] = useState(42);

  const signOut = () => {
    setIsSignedIn(false);
    axios.delete('http://localhost:3001/sessions/1').then(() => {
      console.log('request complete');
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
      <h2>Impatient Element &gt; Example 10</h2>
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
      <button onClick={increment} data-cy="increment">
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
