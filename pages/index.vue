<template>
<div class="index-wrapper">
    <div class="content-wrapper--full">
        <Slideshow />
    </div>
    <div class="content-wrapper"> 
        <div class="posts container--full">
            <div class="post col-12">
                <div v-if="english" class="post-title">
                    <h1> Who are we? </h1>
                </div>
                <div v-else class="post-title">
                    <h1> Vilka är vi? </h1>
                </div>
                <div class="post-text">
                    <sync-loader v-if="this.$store.state.loading" class="vue-spinner" :loading="this.$store.state.loading" :color="color"></sync-loader>
                    <div v-else-if="forening_page[0]" v-html="forening_page[0].excerpt.rendered"></div>
                </div>
                <nuxt-link v-if="english" class="a-button" to="/foreningen"><button>More about us</button></nuxt-link>
                <nuxt-link v-else class="a-button" to="/foreningen"><button>Mer om oss</button></nuxt-link>
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
                <div v-if="post"  class="post col-7">
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
            axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/posts'),
            axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/slides'),
            axios.get('https://api.uppsalapolitices.se/wp-json/wp/v2/pages?per_page=30')
        ]).then(axios.spread((postRes, slidesRes, pagesRes) => {
                store.commit('Posts', postRes.data),
                store.commit('slideShow', slidesRes.data),
                store.commit('allPages', pagesRes.data)
        })).catch((error) =>
            console.log(error)    
        )
    },
    computed: {
        english(){
            return this.$store.state.english;
        },
        posts(){
            if(this.english) {
                return this.$store.state.postsEN.slice(0,3);
            } else {
                return this.$store.state.postsSV.slice(0,3);
            }
        },
        forening_page() {
            if(this.english) {
                return this.$store.getters.foreningPage_eng;
            } else {
                return this.$store.getters.foreningPage;
            }
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
