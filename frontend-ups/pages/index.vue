<template>
  <section class="container">
    <h2>This is our homepage</h2>
  </section>
</template>

<script>
import wp from '~/assets/wp'

export default {
  async asyncData ({ params }) {
    const posts = await wp.posts();
    const projects = await wp.projects();
    return {post: posts, project: projects}
  },
  components: {
    //Här specificeras components som man vill ha med (glöm inte att importera den)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  width: 960px;
}
</style>
