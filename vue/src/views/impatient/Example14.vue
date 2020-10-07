<template>
  <div>
    <h2>Impatient Element &gt; Example 14</h2>
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
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  name: 'Example14',
  methods: {
    ...mapActions({
      signOut: 'example14/signOut',
    }),
    ...mapMutations({
      increment: 'example14/increment',
    }),
  },
  computed: mapState({
    isSignedIn: state => state.example14.isSignedIn,
    isSigningOut: state => state.example14.isSigningOut,
    guestCount: state => state.example14.guestCount,
    memberCount: state => state.example14.memberCount,
  }),
};
</script>
