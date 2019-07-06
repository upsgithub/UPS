<template>
    <div>
        <utskott />
    </div>
</template>

<style lang="scss">

</style>

<script>
import utskott from '~/components/Utskott.vue'
import axios from 'axios'

export default {
    components: {
        utskott
    },
    fetch({ store }){
        return axios.get(
            'http://api.uppsalapolitices.se/wp-json/wp/v2/utskott'
        ).then((response) => {
            store.commit('allUtskott', response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
}
</script>

