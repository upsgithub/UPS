<template>
    <div class="containter-content">
        <div class="content-wrapper--small" id="home-anchor">
            <div class="blog-heading">
                <h4>Senaste</h4>
            </div>        
        </div>    
        <div class="blog content-wrapper--small">
            <div class="plain container--full">
                <div class="posts">
                    <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
                    <div v-else-if="latest_post[0]" class="post-noimage-noborder col-12">
                        <div class="post-title" :ref="latest_post[0].slug">
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
        <div class="blog content-wrapper--small">
            <div class="plain container--full">
                <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
                <div v-else class="posts">
                    <div class="post-noimage col-12" v-for="post in five_posts" :key="post.id">
                        <div class="post-title" :ref="post.slug">
                        <h1>{{ post.title.rendered }}</h1>
                        </div>
                        <div class="post-text" v-html="post.content.rendered"></div>
                        <div class="post-footer">Uppsala Politicesstudernade - {{ post.date.substring(0,10) }}</div>
                    </div>
                    <hr>
                </div>
            </div>
            <div v-if="english" class="blogg_buttons">
                <button v-if="newer_exists" @click="get_newer()">Newer posts</button>
                <button v-if="older_exists" @click="get_older()">Older posts</button>
            </div>
            <div v-else class="blogg_buttons">
                <button v-if="newer_exists" @click="get_newer()">Nyare inlägg</button>
                <button v-if="older_exists" @click="get_older()">Äldre inlägg</button>
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
import $ from 'jquery'
// import { cursorTo } from 'readline';
// import { start } from 'repl';

export default {
    data:function() {
        return {
            color: "#eb5e43",
            current_start: 1,
        }
    },
    async mounted() {
        await this.$store.cache.dispatch('get_Posts')
    },
    methods: {
        get_newer(){
            this.scroll_to_posts();
            this.current_start -= 5;
        },
        get_older(){
            this.scroll_to_posts();
            this.current_start += 5;
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
        english(){
            return this.$store.state.english;
        },
        posts(){
            if(this.english){
                return this.$store.state.postsEN;
            } else {
                return this.$store.state.postsSV;
            }
        },  
        latest_post(){
            return this.posts.slice(0, 1);
        },
        five_posts(){
            return this.posts.slice(this.current_start, this.current_start + 5);
        },
        older_exists(){
            return !(this.current_start + 5 >= this.posts.length);
        },
        newer_exists(){
            return this.current_start - 5 >= 0;
        },
        loading(){
            return (this.latest_post || this.five_posts) == undefined;
        }
    },
    watch:{
        english(){
            this.current_start = 1;
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

.blog{
    figure{
        overflow: hidden;
        padding-top: 0;
        position: relative;
    }
}
</style>