<template>
    <section class="container">
        <Header />
        <Slide />
        <div class="content">
            this is just filler!
        </div>
        <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Slide from '~/components/Slideshow.vue'

export default {
  components: {
    Header,
    Footer,
    Slide
  }
}
</script>

<style>
.container {
    font-family: Minion Pro;
}

.content{
    width: 1000px;
    height: 200px;
}

</style>
