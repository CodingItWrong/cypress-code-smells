<template>
  <p v-if="loading">Loading…</p>
  <div v-else>
    <h2>Flickering Element &gt; Example 5</h2>
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
export default {
  name: 'Example6',
  data() {
    return {
      loading: true,
      count: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
      this.count = 27;
    }, 1000);
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>
