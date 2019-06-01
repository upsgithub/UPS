<template>
    <div class="containter">
        <div class="content-wrapper">
            <div class="plain container--full">
                <div class="plain-text col-12">
                    <div class="post-title">
                        <h1> Kalender </h1>
                    </div>
                </div>
            </div>
            <Sponsor />
            <Instagram />
        </div>
    </div>        
</template>

<script>
import Sponsor from '~/components/Sponsor.vue'
import Instagram from '~/components/Instagram.vue'

export default {
    components: {
        Sponsor,
        Instagram
    }
}
</script>

<style lang="scss">
.plain{
    &-background{
        background-image: url("../assets/img/plain_placeholder.jpg");
    }
}
</style>