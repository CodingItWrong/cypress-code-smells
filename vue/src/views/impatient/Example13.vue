<template>
  <div>
    <h2>Impatient Element &gt; Example 13</h2>
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
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  name: 'Example13',
  methods: {
    ...mapActions({
      signOut: 'example13/signOut',
    }),
    ...mapMutations({
      increment: 'example13/increment',
    }),
  },
  computed: mapState({
    isSignedIn: state => state.example13.isSignedIn,
    guestCount: state => state.example13.guestCount,
    memberCount: state => state.example13.memberCount,
  }),
};
</script>
