<template>
<div class="index-wrapper">
    <div class="content-wrapper--full">
        <Slideshow />
        <div class="image-footer-holder">
            <div class="image-footer">
                <h4>Politices kandidatsprogram - Studierna inom programmet...</h4> <nuxt-link to="/kandidat" class="a-button right"><button>Läs mer</button></nuxt-link>
            </div>
        </div>
    </div>
    <div class="content-wrapper"> 
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
    <Instagram />
</div>
</template>

<script>
import Sponsor from '~/components/Sponsor.vue'
import Slideshow from '~/components/Slideshow.vue'
import Instagram from '~/components/Instagram.vue'

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
        Instagram,
        Sponsor,
        Slideshow
    }
}
</script>

<style lang="scss">
.image-footer-holder{
    width: 100%;
}
.image-footer{
    max-width: 1200px;
    height: 55px;
    margin: 0 auto;
    // margin-bottom: 40px;
    padding: 10px 20px;
    background: #30242e;
    

    &-holder{
        width: 100%;
        margin: 0;
        padding: 0;
        background: #30242e;
    }

    h4{
        width: calc(100% - 95px);
        height: 18px;
        float: left;
        color: #eb5e43;
        margin-top: 8px;
        word-wrap: break-word;
        overflow: hidden;
    }
}

.posts{
    display: inline-block;
    
}

@media only screen and (min-width: 768px) {
    .image-footer{
        padding: 10px 40px;

        h4{
            width: 80%;
        }
        button{
            margin-right: 0px;
        }
    }
    
    .posts{
        margin-top: 20px;
        padding-right: 20px;
    }
}
</style>
