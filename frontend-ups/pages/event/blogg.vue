<template>
    <div class="containter-content">
        <div class="plain-background">
            <h3>Bloggen</h3>
        </div>
        <div class="content-wrapper--small" id="home-anchor">
            <div class="blog-heading">
                <h4>Senaste</h4>
                <sync-loader class="vue-spinner" :loading="loading" :color="color"></sync-loader>
            </div>        
        </div>    
        <div class="content-wrapper--small">
            <div class="plain container--full">
                <div class="posts">
                    <div v-if="loaded" class="post-noimage-noborder col-12">
                        <div class="post-title">
                        <h1>{{ latest_post[0].title.rendered }}</h1>
                        </div>
                        <div class="post-text" v-html="latest_post[0].content.rendered"></div>
                        <div class="post-footer">Uppsala Politicesstudernade - {{ latest_post[0].date.substring(0,10) }}</div>
                    </div>
                </div>
            </div>
        </div>
            <div class="content-wrapper--small" id="post-anchor">
                <div class="blog-heading">
                    <h4>Övriga inlägg</h4>
                </div>        
            </div>
        <div class="content-wrapper--small">
            <div v-if="loaded" class="plain container--full">
                <div class="posts">
                    <div class="post-noimage col-12" v-for="post in five_posts" :key="post.id">
                        <div class="post-title">
                        <h1>{{ post.title.rendered }}</h1>
                        </div>
                        <div class="post-text" v-html="post.content.rendered"></div>
                        <div class="post-footer">Uppsala Politicesstudernade - {{ post.date.substring(0,10) }}</div>
                    </div>
                    <hr>
                </div>
            </div>
            <div class="blogg_buttons">
                <button v-if="older_exists" @click="get_older()">Äldre inlägg</button>
                <button v-if="newer_exists" @click="get_newer()">Nyare inlägg</button>
            </div>
            <KommandeEvent />
            <Sponsor />
        </div>
        <Instagram />
    </div>        
</template>

<script>
import Sponsor from '~/components/Sponsor.vue'
import Instagram from '~/components/Instagram.vue'
import KommandeEvent from '~/components/kommandeEvent.vue'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import axios from 'axios'
import {store} from '../../store/index.js'
// import { start } from 'repl';

export default {
    data:function() {
        return {
            loading: false,
            color: "#eb5e43",
            loaded: true,
            starting_at: 0
        }
    },
    methods: {
        get_newer(){
            starting_at -= 4;
        },
        get_older(){
            starting_at += 4;
        },
        scroll_to_posts(){
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#post-anchor").offset().top
            }, 200);
        },
        scroll_to_top(){
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#home-anchor").offset().top
            }, 200);
        },
    },
    computed: {
        nr_of_posts(){
            return this.$store.state.posts.length;
        },  
        latest_post(){
            return this.$store.state.posts.slice(this.starting_at, 1);
        },
        five_posts(){
            return this.$store.state.posts;
        },
        older_exists(){
            return !(this.nextLatestPosts > this.nr_of_posts);
        },
        newer_exists(){
            return this.nextNewerPosts >= 0;
        }
    },
    components: {
        Sponsor,
        Instagram,
        KommandeEvent,
        SyncLoader
    }
}
</script>

<style lang="scss">
.plain{
    &-background{
        background-image: url("../../assets/img/plain_placeholder.jpg");
    }
}

.blogg_buttons{
    text-align: center;
}

.blog-heading{
    padding: 20px 20px 10px 20px;

    border-bottom: 1px solid grey;
}
</style>