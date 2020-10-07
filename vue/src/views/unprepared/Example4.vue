<template>
  <div>
    <h2>Unprepared Element &gt; Example 4</h2>
    <p v-if="error">{{ error }}</p>

    <p v-if="count === null">
      Loading count…
    </p>
    <p v-else>
      Count:
      <span data-cy="count">{{ count }}</span>
    </p>
    <button
      @click="handleIncrement"
      :disabled="count === null"
      data-cy="increment"
    >
      Increment
    </button>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
  name: 'Example4',
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
      loadCountFromServer: 'example4/loadCountFromServer',
    }),
    ...mapMutations({
      increment: 'example4/increment',
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
    count: state => state.example4.count,
  }),
};
</script>
