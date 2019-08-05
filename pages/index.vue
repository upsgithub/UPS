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
                    <div v-if="firstPage && !english" v-html="firstPage.excerpt.rendered"></div>
                    <div v-if="firstPageEn && english" v-html="firstPageEn.excerpt.rendered"></div>
                </div>
                <nuxt-link v-if="english" class="a-button" to="/foreningen"><button>More about us</button></nuxt-link>
                <nuxt-link v-else class="a-button" to="/foreningen"><button>Mer om oss</button></nuxt-link>
            </div>
            <div v-if="firstPage && !english" class="post-picture col-5">
                <img v-if="firstPage.better_featured_image" 
                :data-srcset="firstPage.better_featured_image.media_details.sizes.medium.source_url + ' 320w,' +
                firstPage.better_featured_image.media_details.sizes.medium_large.source_url + ' 768w,' +
                firstPage.better_featured_image.media_details.sizes.large.source_url + ' 1024w,' +
                firstPage.better_featured_image.source_url + ' 1920w'"
                data-sizes="auto"
                :data-src="firstPage.better_featured_image.source_url + '?lqip'"  
                :alt="firstPage.better_featured_image.alt_text" 
                class="lazyload" >
                <picture v-else>
                    <source data-srcset="~assets/img/placeholder_img.png?webp" type="image/webp">
                    <source data-srcset="~assets/img/placeholder_img.png" type="image/png">
                    <img data-src="~assets/img/placeholder_img.png" class="lazyload" alt="Alternate text for the image">
                </picture>
            </div>
            <div v-if="firstPageEn && english" class="post-picture col-5">
                <img v-if="firstPageEn.better_featured_image" 
                :data-srcset="firstPageEn.better_featured_image.media_details.sizes.medium.source_url + ' 320w,' +
                firstPageEn.better_featured_image.media_details.sizes.medium_large.source_url + ' 768w,' +
                firstPageEn.better_featured_image.media_details.sizes.large.source_url + ' 1024w,' +
                firstPageEn.better_featured_image.source_url + ' 1920w'"
                data-sizes="auto"
                :data-src="firstPageEn.better_featured_image.media_details.sizes.medium_large.source_url"  
                :alt="firstPageEn.better_featured_image.alt_text" 
                class="lazyload" >
                <picture v-else>
                    <source data-srcset="~assets/img/placeholder_img.png?webp" type="image/webp">
                    <source data-srcset="~assets/img/placeholder_img.png" type="image/png">
                    <img data-src="~assets/img/placeholder_img.png" class="lazyload" alt="Alternate text for the image">
                </picture>
            </div>  
        </div>
        <!-- <kommandeEvent /> -->
        <Sponsor />
        <div class="container--full" v-if="threePosts && !english">
            <div class="posts col-12" v-for="post in threePosts" :key="post.id">
                <div class="post-picture col-5">
                   <img v-if="post.better_featured_image" 
                    :data-srcset="post.better_featured_image.media_details.sizes.medium.source_url + ' 320w,' +
                    post.better_featured_image.media_details.sizes.medium_large.source_url + ' 768w,' +
                    post.better_featured_image.media_details.sizes.medium_large.source_url + ' 1024w,' +
                    post.better_featured_image.media_details.sizes.medium_large.source_url + ' 1920w'"
                    data-sizes="auto"
                    :data-src="post.better_featured_image.media_details.sizes.medium_large.source_url + '?lqip'"  
                    :alt="post.better_featured_image.alt_text" 
                    class="lazyload"> 
                    <picture v-else>
                        <source data-srcset="~assets/img/placeholder_img.png?webp" type="image/webp">
                        <source data-srcset="~assets/img/placeholder_img.png" type="image/png">
                        <img data-src="~assets/img/placeholder_img.png" class="lazyload" alt="Alternate text for the image">
                    </picture> 
                </div> 
                <nuxt-link class="a-post" to="/event/blogg">
                    <div class="post col-7">
                        <div class="post-title">
                            <h1>{{ post.title.rendered }}</h1>
                        </div>
                        <div class="post-text" v-html="post.excerpt.rendered"></div>
                    </div>
                </nuxt-link> 
            </div> 
        </div>
        <div class="container--full" v-if="threePostsEn && english">
            <div class="posts col-12" v-for="post in threePostsEn" :key="post.id">
                <div class="post-picture col-5">
                   <img v-if="post.better_featured_image" 
                    :data-srcset="post.better_featured_image.media_details.sizes.medium.source_url + ' 320w,' +
                    post.better_featured_image.media_details.sizes.medium_large.source_url + ' 768w,' +
                    post.better_featured_image.media_details.sizes.medium_large.source_url + ' 1024w,' +
                    post.better_featured_image.media_details.sizes.medium_large.source_url + ' 1920w'"
                    data-sizes="auto"
                    :data-src="post.better_featured_image.media_details.sizes.medium_large.source_url + '?lqip'"  
                    :alt="post.better_featured_image.alt_text" 
                    class="lazyload"> 
                    <picture v-else>
                        <source data-srcset="~assets/img/placeholder_img.png?webp" type="image/webp">
                        <source data-srcset="~assets/img/placeholder_img.png" type="image/png">
                        <img data-src="~assets/img/placeholder_img.png" class="lazyload" alt="Alternate text for the image">
                    </picture> 
                </div> 
                <nuxt-link class="a-post" to="/event/blogg">
                    <div class="post col-7">
                        <div class="post-title">
                            <h1>{{ post.title.rendered }}</h1>
                        </div>
                        <div class="post-text" v-html="post.excerpt.rendered"></div>
                    </div>
                </nuxt-link> 
            </div> 
        </div>
    </div>
    <!-- <Instagram /> -->
</div>
</template>

<script>
import Sponsor from '~/components/Sponsor.vue'
import Slideshow from '~/components/Slideshow.vue'
//import Instagram from '~/components/Instagram.vue'
//import KommandeEvent from '~/components/kommandeEvent.vue'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import $ from 'jquery'
import { mapMutations, mapState, mapGetters } from 'vuex'

export default {
    data:function(){
        return {
            color: "#eb5e43"
        }
    },
    computed: {
        ...mapState({
            firstPage: state => state.pages.page,
            firstPageEn: state => state.pages.pageEn,
            english: state => state.pages.english
        }),
        ...mapGetters({
            threePosts: 'posts/threePosts',
            threePostsEn: 'posts/threePostsEn'
        })
    },
    methods: {
        ...mapMutations({
            setForeningPage: 'pages/firstForeningPage',
            setForeningPageEn: 'pages/firstForeningPageEn',
            setLang: 'pages/setLang'
        })
    },
    components: {
        //Instagram,
        Sponsor,
        Slideshow,
        //KommandeEvent,
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
