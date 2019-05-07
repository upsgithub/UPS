<template>
    <section class="container">
        <Header />
        <Mobile_menu />
        <div class="content">
            <h1> posts from rest api will later be shown below</h1>
        </div>
        <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Mobile_menu from '~/components/Mobile_menu.vue'
import Footer from '~/components/Footer.vue'
import wp from '~/assets/wp'

export default {
  async asyncData ({ params }) {
    const posts = await wp.posts();
    return {post: posts}
  },
  components: {
    Header,
    Mobile_menu,
    Footer
  }
}
</script>

<style lang="scss">
.container {
    font-family: Minion Pro;
    
    &--full{
      width: 100%;
    }
}

.content{
    width: 100%;
    height: 500px;
}
</style>
