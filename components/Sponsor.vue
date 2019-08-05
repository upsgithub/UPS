<template>
    <div class="samarbeten container--full">
        <h4 v-if="english">Our partners</h4>
        <h4 v-else>Våra samarbetspartners</h4>
        <div v-if="samarbeten" class="samarbeten-wrapper">  
            <div class="samarbete-logo col-6" v-for="sponsor in samarbeten" :key="sponsor.id">
                <a class="a-button" target="blank" :href="sponsor.acf.lank"><img :data-src="sponsor.acf.bild.url" class="lazyload"/></a>
            </div>
        </div>
    </div>
</template>

<script>
import createCache from 'vuex-cache';
import { mapMutations, mapState } from 'vuex'

export default {
    data() {
        return {
            color: "#eb5e43"
        }
    },
    computed: {
        ...mapState({
            samarbeten: state => state.samarbeten.list,
            english: state => state.pages.english
        })
    },
    methods: {
        ...mapMutations({
            setSamarbeten: 'samarbeten/set'
        })
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



