<template>
    <section class="container">
        <Header />
        <nuxt />
        <mobileInfo  />
        <MobileMenu />
        <Footer />
    </section>
</template>

<script>
import Header from '~/components/Header.vue'
import MobileMenu from '~/components/Mobile_menu.vue'
import mobileInfo from '~/components/mobile-info.vue'
import Footer from '~/components/Footer.vue'

export default{
    components: {
        Header,
        MobileMenu,
        mobileInfo,
        Footer
    }
}
</script>
<style>

@font-face {font-family: "Minion Pro"; src: url("//db.onlinewebfonts.com/t/fe9c236a1c142788cb16ec5238c7833e.eot"); src: url("//db.onlinewebfonts.com/t/fe9c236a1c142788cb16ec5238c7833e.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/fe9c236a1c142788cb16ec5238c7833e.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/fe9c236a1c142788cb16ec5238c7833e.woff") format("woff"), url("//db.onlinewebfonts.com/t/fe9c236a1c142788cb16ec5238c7833e.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/fe9c236a1c142788cb16ec5238c7833e.svg#Minion Pro") format("svg"); }

html {
  font-family: 'Minion Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
