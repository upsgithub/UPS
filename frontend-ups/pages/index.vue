<template>
    <section class="container">
        <Header />
<<<<<<< HEAD
        <div class="container-content">   
            <div class="posts">
              <h1> Posts from rest api</h1>
              <div class="post" v-for="post in posts" :key="post.id">
                <h4>{{ post.title.rendered }}</h4>
                <div class="post-content" v-html="post.excerpt.rendered"></div>
              </div>
            </div>
=======
        <Mobile_menu />
        <div class="content">
            <h1> posts from rest api will later be shown below</h1>
>>>>>>> footer
        </div>
        <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Mobile_menu from '~/components/Mobile_menu.vue'
import Footer from '~/components/Footer.vue'
//import wp from '~/assets/wp'
import axios from 'axios'

export default {
  /* async asyncData ({ params }) {
    const posts = await wp.posts();
    return {post: posts}
  }, */
  fetch({ store }){
    return axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2/posts').then((res) => {
      store.commit('frontPagePosts', res.data)
    }).catch((error) => {
      console.log(error)
    })
  },
  computed: {
    posts(){
      return this.$store.state.posts
    }
  },
  components: {
    Header,
    Mobile_menu,
    Footer
  }
}
</script>

<style lang="scss">
<<<<<<< HEAD

=======
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
>>>>>>> footer
</style>
