<template>
  <div>
    <h2>Impatient Element &gt; Example 9</h2>
    <p v-if="isSignedIn">
      Signed In
      <button @click="signOut" data-cy="sign-out">
        Sign Out
      </button>
    </p>
    <p v-else data-cy="signed-out">
      Signed Out
    </p>
    <button @click="increment" data-cy="increment">
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
  name: 'Example9',
  data() {
    return {
      isSignedIn: true,
      guestCount: 27,
      memberCount: 42,
    };
  },
  methods: {
    signOut() {
      axios.delete('http://localhost:3001/sessions/1').then(() => {
        this.isSignedIn = false;
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
