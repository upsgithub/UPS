<template>
<div class="index-wrapper">
    <div class="content-wrapper--full">
        <Slideshow />
    </div>
    <div class="content-wrapper"> 
        <div class="posts container--full" v-for="post in posts" :key="post.id">
            <div class="post col-12">
                <!-- <div v-if="english" class="post-title">
                    <h1> Who are we? </h1>
                </div>
                <div v-else class="post-title">
                    <h1> Vilka är vi? </h1>
                </div>
                Forening first post content here -->
            </div>
            <!-- forening first post image here -->
        </div>
        <!-- <kommandeEvent /> -->
        <Sponsor />
        <div class="container--full">
            <div class="posts col-12" v-for="post in 3" :key="post">
                <div class="post-picture col-5">
                   <img v-if="posts[post].better_featured_image" 
                    :data-srcset="posts[post].better_featured_image.media_details.sizes.medium.source_url + ' 320w,' +
                    posts[post].better_featured_image.media_details.sizes.medium_large.source_url + ' 768w,' +
                    posts[post].better_featured_image.media_details.sizes.large.source_url + ' 1024w,' +
                    posts[post].better_featured_image.source_url + ' 1920w'"
                    data-sizes="auto"
                    :data-src="posts[post].better_featured_image.source_url + '?lqip'"  
                    :alt="posts[post].better_featured_image.alt_text" 
                    class="lazyload"> 
                    <picture v-else>
                        <source data-srcset="~assets/img/placeholder_img.png?webp" type="image/webp">
                        <source data-srcset="~assets/img/placeholder_img.png" type="image/png">
                        <img data-src="~assets/img/placeholder_img.png" class="lazyload" alt="Alternate text for the image">
                    </picture> 
                </div>
                <nuxt-link class="a-post" to="/event/blogg">
                    <div v-if="post"  class="post col-7">
                        <div class="post-title">
                            <h1>{{ posts[post].title.rendered }}</h1>
                        </div>
                        <div class="post-text" v-html="posts[post].excerpt.rendered"></div>
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
import { mapMutations, mapState } from 'vuex'

export default {
    data:function(){
        return {
            color: "#eb5e43"
        }
    },
    computed: {
        ...mapState({
            posts: state => state.posts.list,
            firstPage: state => state.pages.page
        })
    },
    methods: {
        ...mapMutations({
            setPosts: 'posts/set',
            setFirstPage: 'pages/first'
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
