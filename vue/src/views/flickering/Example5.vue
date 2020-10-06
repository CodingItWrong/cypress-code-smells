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
  name: 'Example5',
  data() {
    return {
      loading: false,
      count: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.count = 27;
      }, 1000);
    }, 0); // Vue seems to require this to get it to break
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>
