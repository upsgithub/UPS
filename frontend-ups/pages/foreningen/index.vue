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
    }
}
</script>

