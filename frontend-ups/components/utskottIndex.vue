<template>
    <div>
        <div class="ordfaranderiet">
            <h3>Ordföranderiet</h3>
            <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
            <div v-else class="ordfaranderiet-pictures">
                <template v-for="ordforande in ordforanden">
                <div class="picture-holder">
                    <div class="ordfaranderiet-picture col-6">
                        <img :src="ordforande.better_featured_image.source_url" />
                    </div> 
                    <div class="ordfaranderiet-title">
                        <h4>{{ ordforande.acf.titel }}</h4>
                        <h5>{{ ordforande.acf.namn }}</h5>
                    </div> 
                </div>
                </template>
            </div>
        </div>
        <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
        <div v-else class="utskotten" >
            <h3>{{ content[0].title.rendered }}</h3>
            <div class="utskotten-text" v-html="content[0].content.rendered">
        </div>
        <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
        <div v-else class="utskotten-pictures">
            <div class="utskotten-picture col-12" v-for="utskott in utskotten" >
                <nuxt-link :to="'/foreningen/utskotten/' + utskott.slug">
                    <img class="img-banner" :src="utskott.better_featured_image.source_url" />
                    <h3>{{ utskott.title.rendered }}</h3>
                </nuxt-link>
            </div> 
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

export default {
    data() {
        return {
            content: [],
            color: "#eb5e43",
            fallback: "../assets/img/people_books@1024w.jpg"
        }
    },
    created() {
        this.get_content();
    },
    methods: {
        get_content() {
            for(let i = 0; i < this.$store.state.pages.length; i++) {
                if(this.$store.state.pages[i].slug === 'foreningen') {
                    this.content.push(this.$store.state.pages[i]);
                }
                
            }
        }
    },
    computed: {
        utskotten(){
            return this.$store.state.utskott;
        },
        ordforanden(){
            return this.$store.state.ordforande;
        },
        loading(){
            return (this.utskott || this.ordforanden || this.content) == undefined;
        },
        loaded(){
            return (this.utskott || this.ordforanden || this.content) != undefined;
        }
    }
}                
</script>

<style lang="scss" scoped>

    h3 {
        color: black;
    }

.picture-holder{
    width: 50%;
    margin-bottom: -40px;
}

.ordfaranderiet{
    text-align: center;
    width: 100%;

    &-pictures{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    &-picture{
        border-radius: 50%;
		overflow: hidden;
		width: 80%;
		height: 50%;
        position: relative;
        margin: 5px auto 20px auto;

        img{
            max-width: 100%;
            height: auto;

            &::after{
                content: "";
                clear: both;
                display: table;
            }
        }
    }

    
}

.utskotten{
    text-align: center;
    display: inline-block;

    &-text{
        padding: 10px;
        margin-bottom: 10px;
    }

    &-pictures{
        display: inline-block;
    }

    &-picture{
        float: left;
        padding: 10px;
        width: 100%;

        h3 {
            margin: 10px;
        }
        img{
            width: 100%;
        }
    }
}

    .img-banner {
        object-fit: cover;
        width: 100%;
        height: 160px;
        }

   @media only screen and (min-width: 800px) {
        .img-banner {
        object-fit: cover;
        width: 100%;
        height: 280px;
        }

        .picture-holder{
            width: 25%;
            margin-bottom: -40px;
        }


        .ordfaranderiet{
        margin: 10px 0 -40px 0;

            &-picture{
                margin-top: 10px;

                img {
                }
            }

            &-title{
                width: 100%;
                text-align: center;
            }
        }
    
        .utskotten{
            &-picture{
                width: 50%;
            }
        }
   }
    
</style>