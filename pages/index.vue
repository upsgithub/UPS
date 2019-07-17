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
                    <sync-loader v-if="this.$store.state.loading && !this.$store.cache.has('get_Posts')" class="vue-spinner" :loading="this.$store.state.loading && !this.$store.cache.has('get_Posts')" :color="color"></sync-loader>
                    <div v-if="forening_page[0]" v-html="forening_page[0].excerpt.rendered"></div>
                </div>
                <nuxt-link v-if="english" class="a-button" to="/foreningen"><button>More about us</button></nuxt-link>
                <nuxt-link v-else class="a-button" to="/foreningen"><button>Mer om oss</button></nuxt-link>
            </div>
            <div v-if="forening_page[0]" class="post-picture col-5">
                <img v-if="forening_page[0].better_featured_image" 
                :data-srcset="forening_page[0].better_featured_image.media_details.sizes.medium.source_url + ' 320w,' +
                forening_page[0].better_featured_image.media_details.sizes.medium_large.source_url + ' 768w,' +
                forening_page[0].better_featured_image.media_details.sizes.large.source_url + ' 1024w,' +
                forening_page[0].better_featured_image.source_url + ' 1920w'"
                data-sizes="auto"
                :data-src="forening_page[0].better_featured_image.source_url + '?lqip'"  
                :alt="forening_page[0].better_featured_image.alt_text" 
                class="lazyload" >
                <picture v-else>
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
                     <picture v-if="post.better_featured_image">
                        <img v-if="post.better_featured_image" 
                        :data-srcset="post.better_featured_image.media_details.sizes.medium.source_url + ' 320w,' +
                        post.better_featured_image.media_details.sizes.medium_large.source_url + ' 768w,' +
                        post.better_featured_image.media_details.sizes.large.source_url + ' 1024w,' +
                        post.better_featured_image.source_url + ' 1920w'"
                        data-sizes="auto"
                        :data-src="post.better_featured_image.source_url + '?lqip'"  
                        :alt="post.better_featured_image.alt_text" 
                        class="lazyload" >
                    </picture>
                    <picture v-else>
                        <source data-srcset="~assets/img/placeholder_img.png?webp" type="image/webp">
                        <source data-srcset="~assets/img/placeholder_img.png" type="image/png">
                        <img data-src="~assets/img/placeholder_img.png" class="lazyload" alt="Alternate text for the image">
                    </picture>
                </div>
                <nuxt-link class="a-post" to="/event/blogg">
                    <div v-if="post"  class="post col-7">
                        <div class="post-title">
                            <h1>{{ post.title.rendered }}</h1>
                        </div>
                        <div class="post-text" v-html="post.excerpt.rendered"></div>
                    </div>
                </nuxt-link>
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
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import axios from 'axios'
import $ from 'jquery'

export default {
    data:function(){
        return {
            color: "#eb5e43"
        }
    },
    async mounted() {
        await this.$store.cache.dispatch('get_slideShow')
        await this.$store.cache.dispatch('get_Posts')
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
        KommandeEvent,
        SyncLoader
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
