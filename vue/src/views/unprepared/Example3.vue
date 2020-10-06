<template>
  <div>
    <h2>Unprepared Element &gt; Example 3</h2>
    <p v-if="error">{{ error }}</p>

    <p v-if="count === null">
      Loading count…
    </p>
    <p v-else>
      Count:
      <span data-cy="count">{{ count }}</span>
    </p>
    <button @click="increment" data-cy="increment">
      Increment
    </button>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  name: 'Example3',
  mounted() {
    this.loadCountFromServer();
  },
  data() {
    return {
      error: null,
    };
  },
  methods: {
    ...mapActions({
      loadCountFromServer: 'example3/loadCountFromServer',
    }),
    ...mapMutations({
      increment: 'example3/increment',
    }),
    handleIncrement() {
      if (this.count === null) {
        this.error = 'Tried to increment count before it was set!';
      } else {
        this.increment();
      }
    },
  },
  computed: mapState({
    count: state => state.example3.count,
  }),
};
</script>
