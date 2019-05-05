<template>
    <section class="container">
        <Header />
        <div class="content">
            this is just filler!
        </div>
        <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.container {
    font-family: Minion Pro;
}

.content{
    width: 1000px;
    height: 500px;
}

</style>
