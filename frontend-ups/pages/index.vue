<template>
    <section class="container">
        <Menu />
        <div class="content">
            this is just filler!
        </div>
        <Footer />
  </section>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Menu,
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
