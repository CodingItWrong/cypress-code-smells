<template>
  <p v-if="loading">Loading…</p>
  <div v-else>
    <h2>Flickering Element &gt; Example 8</h2>
    <p>
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
  name: 'Example8',
  mounted() {
    this.loadCountFromServer();
  },
  methods: {
    ...mapActions({
      loadCountFromServer: 'example8/loadCountFromServer',
    }),
    ...mapMutations({
      increment: 'example8/increment',
    }),
  },
  computed: mapState({
    loading: state => state.example8.loading,
    count: state => state.example8.count,
  }),
};
</script>
