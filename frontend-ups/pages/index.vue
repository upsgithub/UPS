<template>
    <section class="container">
        <Header />
        <div class="container-content">
            <div class="posts container--full">
                <div class="post col-12">
                    <div class="post-title">
                        <h1> Vilka är vi? </h1>
                    </div>
                    <div class="post-text">
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ex sit amet justo feugiat viverra. Pellentesque sit amet velit tempor, euismod augue viverra, laoreet mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vel ipsum vitae mi maximus rhoncus eu nec ex. In sollicitudin ut elit semper elementum. Praesent vitae magna non arcu imperdiet tempor id quis libero. Nunc id tempus neque. Pellentesque ac leo sapien.
                            Curabitur gravida vulputate sapien, et semper odio sagittis eu. 
                        </p>
                    </div>
                    <button>Mer om oss</button>
                </div>
                <div class="post-picture col-5">
                    <img src="../assets/img/placeholder_img.png" /> 
                </div>
            </div>
            <Sponsor />
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
        </div>
        <br><br>
        <MobileMenu />
        <Footer />
    </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Sponsor from '~/components/Sponsor.vue'
import MobileMenu from '~/components/Mobile_menu.vue'
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
    Sponsor,
    MobileMenu,
    Footer
  }
}
</script>

<style lang="scss">
.posts{
    display: inline-block;
}

@media only screen and (min-width: 800px) {
    .posts{
        margin-top: 20px;
    }
}
</style>
