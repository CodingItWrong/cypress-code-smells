<template>
  <div>
    <h2>Impatient Element &gt; Example 11</h2>
    <p v-if="isSignedIn">
      Signed In
      <button @click="signOut" data-cy="sign-out">
        Sign Out
      </button>
    </p>
    <p v-else data-cy="signed-out">
      Signed Out
    </p>
    <button @click="increment" :disabled="isSigningOut" data-cy="increment">
      Increment
    </button>
    <p>
      Guest Count: <span data-cy="guest-count">{{ guestCount }}</span>
    </p>
    <p>
      Member Count: <span data-cy="member-count">{{ memberCount }}</span>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Example11',
  data() {
    return {
      isSignedIn: true,
      isSigningOut: false,
      guestCount: 27,
      memberCount: 42,
    };
  },
  methods: {
    signOut() {
      this.isSigningOut = true;
      axios.delete('http://localhost:3001/sessions/1').then(() => {
        this.isSignedIn = false;
        this.isSigningOut = false;
      });
    },
    increment() {
      if (this.isSignedIn) {
        this.memberCount += 1;
      } else {
        this.guestCount += 1;
      }
    },
  },
};
</script>
