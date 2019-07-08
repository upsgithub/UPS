<template>
    <!--
    <div>
        <div class="plain-background">
            <h3>Utskotten</h3>
        </div>
        <div class="content-wrapper">
            <sync-loader v-if="loading" class="vue-spinner" :loading="loading" :color="color"></sync-loader>
            <div v-else class="utskotten-pictures">
                <div class="utskotten-picture col-12" v-for="utskott in utskotten" >
                    <nuxt-link :to="'/foreningen/utskotten/' + utskott.slug">
                        <img class="img-banner" :src="utskott.acf.foreningssida_utskottsbild.url" />
                        <h3>{{ utskott.title.rendered }}</h3>
                    </nuxt-link>
                </div> 
            </div>
        </div>
    </div>
    -->
</template>

<script>
// import axios from 'axios'
// import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

// export default {
//     data() {
//         return {
//             content: [],
//             color: "#eb5e43",
//             fallback: "../assets/img/people_books@1024w.jpg"
//         }
//     },
//     created() {
//         this.get_content();
//     },
//     methods: {
//         get_content() {
//             for(let i = 0; i < this.$store.state.pages.length; i++) {
//                 if(this.$store.state.pages[i].slug === 'foreningen') {
//                     this.content.push(this.$store.state.pages[i]);
//                 }
                
//             }
//         }
//     },
//     computed: {
//         utskotten(){
//             return this.$store.state.utskott;
//         },
//         loading(){
//             return (this.utskott || this.ordforanden || this.content) == undefined;
//         },
//         loaded(){
//             return (this.utskott || this.ordforanden || this.content) != undefined;
//         }
//     }
// }                
</script>

<style lang="scss" scoped>

</style>
