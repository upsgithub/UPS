<template>
    <div>
        <page />
    </div>        
</template>

<script>
import page from '~/components/PlainPage.vue'
import axios from 'axios'

export default {
    components: {
        page
    },
    fetch({ store }){
        return axios.get(
            'http://api.uppsalapolitices.se/wp-json/wp/v2/pages?per_page=30'
        ).then((response) => {
            store.commit('allPages', response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
}                
</script>

<style lang="scss">

</style>
