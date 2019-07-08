<template>
<div class="container--full">
    <div class="content-wrapper">
            <utskottIndex />
        <Sponsor />
    </div>
    <Instagram />
    </div>
</template>

<style lang="scss">

</style>

<script>
import Sponsor from '~/components/Sponsor.vue'
import Instagram from '~/components/Instagram.vue'
import utskottIndex from '~/components/utskottIndex.vue'
import axios from 'axios'


export default {
    components: {
        Sponsor,
        Instagram,
        utskottIndex
    },
    fetch({ store }){
        return axios.all([
            axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2/utskott'), 
            axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2/ordforande'),
            axios.get('http://api.uppsalapolitices.se/wp-json/wp/v2/pages')
        ]).then(axios.spread((utskottRes, ordforandeRes, pagesRes) => {
            store.commit('allUtskott', utskottRes.data),
            store.commit('ordforande', ordforandeRes.data),
            store.commit('allPages', pagesRes.data),
            this.loading = false;
        })).catch((error) => {
            console.log(error)
        })
    }
}
</script>

