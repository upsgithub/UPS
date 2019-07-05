<template>
  <div class="error-404">
        <h1 class="error-text">Oh no! Something went horribly wrong!</h1>
        <nuxt-link to="/">GO BACK HOME</nuxt-link>
    </div>
</template>
<script>
export default {
  name: 'error-500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>