<template>
    <div>
        <sync-loader v-if="this.$store.state.loading" class="vue-spinner" :loading="this.$store.state.loading" :color="color"></sync-loader>
        <div v-else>
            <div class="ordfaranderiet">
                <h3>Ordföranderiet</h3>
                <div class="ordfaranderiet-pictures">
                    <template v-for="ordforande in ordforanden">
                    <div class="picture-holder">
                        <div class="ordfaranderiet-picture col-6"> 
                            <img v-if="ordforande.better_featured_image" :src="ordforande.better_featured_image.source_url" />
                            <img v-else src="../assets/img/profile.png" />
                        </div> 
                        <div class="ordfaranderiet-title">
                            <h4 v-if="ordforande && english">{{ ordforande.acf.titelengit }}</h4>
                            <h4 v-else> {{ ordforande.acf.titel }} </h4>
                            <h5 v-if="ordforande">{{ ordforande.acf.namn }}</h5>
                        </div> 
                    </div>
                    </template>
                </div>
            </div>
            <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
            <div v-else class="utskotten" >
                <h3 v-if="content[0]">{{ content[0].title.rendered }}</h3>
                <div v-if="content[0]" class="utskotten-text" v-html="content[0].content.rendered">
            </div>
            <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
            <div v-else class="utskotten-pictures">
                <div class="utskotten-picture col-12" v-for="utskott in utskotten" >
                    <nuxt-link :to="'/foreningen/utskotten/' + utskott.slug">
                        <img v-if="utskott.acf.foreningssida_utskottsbild.url" class="img-banner" :src="utskott.acf.foreningssida_utskottsbild.url" />
                        <img v-else class="img-banner" src="../assets/img/logo_placeholder.png" />
                        <h3 >{{ utskott.title.rendered }}</h3>
                    </nuxt-link>
                </div> 
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
            color: "#eb5e43"
        }
    },
    created() {
        this.$store.dispatch('get_ordforande');
        this.$store.dispatch('get_allUtskott');
        this.$store.dispatch('get_allPages');
    },
    components: {
        SyncLoader
    },
    methods: {

    },
    computed: {
        english() {
            return this.$store.state.english;
        },
        content() {
            if(this.english) {
                return this.$store.getters.foreningPage_eng;
            } else {
                return this.$store.getters.foreningPage;
            }
        },
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

<style lang="scss">


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
    text-align: left;
    display: inline-block;

    h3{
        text-align: center;
    }

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
            text-align: center;
            margin: 10px;
            color: black;
        }
        img{
            width: 100%;
        }
    }
}

    .img-banner {
        object-fit: cover;
        width: 100%;
        height: 140px;
        }

    @media only screen and (min-width: 470px) {
        .img-banner {
        object-fit: cover;
        width: 100%;
        height: 280px;
        }
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