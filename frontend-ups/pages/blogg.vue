<template>
    <div class="containter-content">
        <div class="plain-background">
            <h3>Bloggen</h3>
        </div>
        <div class="image-footer-holder" id="home-anchor">
            <div class="image-footer">
                <h4>Sensate Inlägget:</h4>
                <sync-loader class="vue-spinner" :loading="loading" :color="color"></sync-loader>
            </div>        
        </div>    
        <div class="content-wrapper--small">
            <div class="plain container--full">
                <div class="posts">
                    <div v-if="loaded" class="post-noimage-noborder col-12">
                        <div class="post-title">
                        <h1>{{ currentPost[0].title.rendered }}</h1>
                        </div>
                        <div class="post-text" v-html="currentPost[0].content.rendered"></div>
                        <div class="post-footer">Uppsala Politicesstudernade - {{ currentPost[0].date }}</div>
                    </div>
                </div>
            </div>
        </div>
            <div class="image-footer-holder" id="post-anchor">
                <div class="image-footer">
                    <h4>Alla inlägg:</h4>
                </div>        
            </div>
        <div class="content-wrapper--small">
            <div v-if="loaded" class="plain container--full">
                <div class="posts">
                    <div class="post-noimage col-12" v-for="post in latestPosts" :key="post.id">
                        <div class="post-title">
                        <h1>{{ post.title.rendered }}</h1>
                        </div>
                        <div class="post-text" v-html="post.content.rendered"></div>
                        <div class="post-footer">Uppsala Politicesstudernade - {{ post.date }}</div>
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

export default {
    data:function() {
        return {
            loading: true,
            color: "#eb5e43",
            currentPost: [],
            currentPostPos: 0,
            latestPosts: [],
            loaded: false,
            nextLatestPosts: 4,
            nextNewerPosts: -4,
            nrOfPosts: 0
        }
    },
    created:function() {
        this.get_posts(0, 0);
    },
    methods: {
        // load_post(id){
        //     this.get_posts(0, id);
        //     this.scroll_to_top();
        // },
        get_newer(){
            this.get_posts(this.nextNewerPosts, this.currentPostPos);
            this.nextNewerPosts -= 4;
            this.nextLatestPosts -= 4;
            this.scroll_to_posts();
        },
        get_older(){
            this.get_posts(this.nextLatestPosts, this.currentPostPos);
            this.nextLatestPosts += 4;
            this.nextNewerPosts += 4;
            this.scroll_to_posts();
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
        get_posts:function(start, current){
            return axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2/posts').then((res) => {
                this.currentPostPos = current;
                res.data[current].date = res.data[current].date.substring(0, 10);
                this.currentPost.push(res.data[current]);
                this.nrOfPosts = res.data.length;
                this.latestPosts = [];
                for (var i = 0; i < 4; i++){
                    if((1 + start + i) < res.data.length){
                        res.data[1 + start + i].date = res.data[1 + start + i].date.substring(0, 10);
                        this.latestPosts.push(res.data[1+ start + i]);
                    }
                }
                this.latestPosts.slice(current, 1);
                this.loaded = true;
                this.loading = false;
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    computed: {
        older_exists(){
            return !(this.nextLatestPosts > this.nrOfPosts);
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
        background-image: url("../assets/img/plain_placeholder.jpg");
    }
}

.blogg_buttons{
    text-align: center;
}
</style>