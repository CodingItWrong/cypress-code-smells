<template>
  <div>
    <h2>Unprepared Element &gt; Example 2</h2>
    <p v-if="error">{{ error }}</p>

    <p v-if="count === null">
      Loading count…
    </p>
    <p v-else>
      Count:
      <span data-cy="count">{{ count }}</span>
    </p>
    <button @click="increment" :disabled="count === null" data-cy="increment">
      Increment
    </button>
  </div>
</template>

<script>
export default {
  name: 'Example2',
  data() {
    return {
      count: null,
      error: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.count = 27;
    }, 1000);
  },
  methods: {
    increment() {
      if (this.count === null) {
        this.error = 'Tried to increment count before it was set!';
      } else {
        this.count += 1;
      }
    },
  },
};
</script>
