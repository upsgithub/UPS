<template>
    <div class="samarbeten container--full">
        <h4 v-if="english">Our partners</h4>
        <h4 v-else>Våra samarbetspartners</h4>
        <sync-loader v-if="this.$store.state.loading" class="vue-spinner" :loading="this.$store.state.loading" :color="color"></sync-loader>
        <div v-else class="samarbeten-wrapper">  
            <div class="samarbete-logo col-6" v-for="sponsor in samarbeten" :key="sponsor.id">
                <a class="a-button" target="blank" :href="sponsor.acf.lank"><img :data-src="sponsor.acf.bild.url" class="lazyload"/></a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import createCache from 'vuex-cache';



export default {
    data() {
        return {
            color: "#eb5e43"
        }
    },
    async mounted() {
        //await this.$store.cache.dispatch('get_samarbeten')
    },
    components: {
        SyncLoader
    },
    computed: {
        samarbeten(){
            return this.$store.state.samarbeten;
        },
        english(){
            return this.$store.state.english;
        }
    }
}
</script>

<style lang="scss">
    .samarbeten{
        width: auto;
        border-top: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;   
        margin: 20px 0;
        padding: 20px 10px;
        text-align: center;
    }

    .samarbeten-wrapper{
        width: 100%;
        display: inline-block;
        margin-top: 50px;
    }   

    .samarbete-logo{
        height: 50px;
        margin: 15px 0;
        padding: 0 15px;
        float: left;
        &::after{
            clear: both;
        }
    }

    .samarbete-logo img{
        max-width:100%;
        max-height:100%;
    }

    @media only screen and (min-width: 600px) {
        .samarbete-logo{
            width: 25%;
            height: 120px;
            margin: 0;
            padding: 0 5px;
        }
    }
</style>



