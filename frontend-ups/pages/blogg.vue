<template>
    <div class="content-wrapper">   
        <div class="posts container--full">
            <div class="posts" v-for="post in posts" :key="post.id">
                <div class="post-picture col-5">
                    <img src="../assets/img/placeholder_img.png" /> 
                </div>
                <div class="post col-12">
                    <div class="post-title">
                    <h1>{{ post.title.rendered }}</h1>
                    </div>
                    <div class="post-text" v-html="post.excerpt.rendered"></div>
                </div>
            </div>
        </div>
        <Sponsor />
    </div>
</template>

<script>
import Sponsor from '~/components/Sponsor.vue'
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
    Sponsor
  }
}
</script>