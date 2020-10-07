<template>
  <p v-if="loading">Loading…</p>
  <div v-else>
    <h2>Flickering Element &gt; Example 7</h2>
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
  name: 'Example7',
  mounted() {
    this.loadCountFromServer();
  },
  methods: {
    ...mapActions({
      loadCountFromServer: 'example7/loadCountFromServer',
    }),
    ...mapMutations({
      increment: 'example7/increment',
    }),
  },
  computed: mapState({
    loading: state => state.example7.loading,
    count: state => state.example7.count,
  }),
};
</script>
