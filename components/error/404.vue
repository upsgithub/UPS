<template>
    <div class="error-404">
        <h3 class="error-text">404</h3>
        <nuxt-link to="/">GO BACK HOME</nuxt-link>
    </div>
</template>

<style lang="scss">

</style>
<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>