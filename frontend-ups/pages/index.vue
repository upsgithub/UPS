<template>
    <section class="container">
        <Header />
        <div class="container-content">
            <h1> posts from rest api will later be shown below</h1>
        </div>
        <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import wp from '~/assets/wp'

export default {
  async asyncData ({ params }) {
    const posts = await wp.posts();
    return {post: posts}
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

</style>
