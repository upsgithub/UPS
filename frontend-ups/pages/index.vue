<template>
<div class="index-wrapper">
    <div class="content-wrapper--full">
        <Slideshow />
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
                <nuxt-link class="a-button" to="/foreningen"><button>Mer om oss</button></nuxt-link>
            </div>
            <div class="post-picture col-5">
                <picture>
                    <source data-srcset="~assets/img/placeholder_img.png?webp" type="image/webp">
                    <source data-srcset="~assets/img/placeholder_img.png" type="image/png">
                    <img data-src="~assets/img/placeholder_img.png" class="lazyload" alt="Alternate text for the image">
                </picture>
            </div>
        </div>
        <kommandeEvent />
        <Sponsor />
        <div class="container--full">
            <div class="posts col-12" v-for="post in posts" :key="post.id">
                <div class="post-picture col-5">
                    <picture>
                        <source data-srcset="~assets/img/placeholder_img.png?webp" type="image/webp">
                        <source data-srcset="~assets/img/placeholder_img.png" type="image/png">
                        <img data-src="~assets/img/placeholder_img.png" class="lazyload" alt="Alternate text for the image">
                    </picture>
                </div>
                <div class="post col-7">
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
import KommandeEvent from '~/components/kommandeEvent.vue'
import axios from 'axios'
import $ from 'jquery'

export default {
    fetch({ store }){
        return axios.all([
            axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2/posts'),
            axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2/slides')
        ]).then(axios.spread((postRes, slidesRes) => {
                store.commit('Posts', postRes.data),
                store.commit('slideShow', slidesRes.data)
        })).catch((error) =>
            console.log(error)    
        )
    },
    computed: {
        posts(){
            return this.$store.state.posts.slice(0,3);
        } 
    },
    components: {
        Instagram,
        Sponsor,
        Slideshow,
        KommandeEvent
    }
}
</script>

<style lang="scss">
    .post-picture{
        img{
            width: 100%;
        }
    }
    @media only screen and (max-width: 768px) {
        .post{
            width: 100%;
        }
    }
    
</style>
