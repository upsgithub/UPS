<template>
    <div class="container">
        <Header />
        <div class="content--full">
            This is the utbildningssida.
        </div>
        <Sponsor />
        <MobileMenu />
        <Footer />
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Sponsor from '~/components/Sponsor.vue'
import MobileMenu from '~/components/Mobile_menu.vue'
import Footer from '~/components/Footer.vue'

export default {
    components: {
        Header,
        Sponsor,
        MobileMenu,
        Footer
    }
}
</script>

