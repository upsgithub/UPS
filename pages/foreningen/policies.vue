<template>
  <div>
    <sync-loader
      v-if="this.$store.state.loading"
      class="vue-spinner"
      :loading="this.$store.state.loading"
      :color="color"
    ></sync-loader>
    <div v-else-if="cur_page" class="banner-background">
      <img
        v-if="!cur_page.acf.banner_bild"
        data-srcset="/img/people_books@320w.jpg 320w,
           /img/people_books@480w.jpg  480w, 
            /img/people_books@768w.jpg 768w,
            /img/people_books@1024w.jpg  1024w, 
            /img/people_books@1376w.jpg  1376w, 
            /img/people_books@1920w.jpg  1920w"
        data-sizes="auto"
        data-src="/img/people_books@1920w.jpg"
        class="lazyload"
        alt="people"
      />
      <img
        v-if="cur_page.acf.banner_bild"
        :data-srcset="cur_page.acf.banner_bild.sizes.medium + ' 320w,' +
                    cur_page.acf.banner_bild.sizes.medium_large + ' 768w,' +
                    cur_page.acf.banner_bild.sizes.large + ' 1024w,' +
                    cur_page.acf.banner_bild.url + ' 1920w'"
        data-sizes="auto"
        :data-src="cur_page.acf.banner_bild.url + '?lqip'"
        class="lazyload"
        :alt="cur_page.acf.banner_bild.alt"
      />
      <h3 :style="cur_page.acf.bannertext" v-if="cur_page.title">{{ cur_page.title.rendered }}</h3>
    </div>
    <div class="content-wrapper">
      <div class="plain container--full">
        <div class="plain-text col-12">
          <div class="post-title">
            <h1 v-if="cur_page">{{ cur_page.title.rendered }}</h1>
          </div>
          <div v-if="cur_page" class="post-text" v-html="cur_page.content.rendered"></div>

          <div class="item">
            <div v-for="(item, i) in policy" :key="item.id" class="item__main">
              <div>
                <h2 v-if="english">{{ item.acf.namn_en }}</h2>
                <h2 v-else>{{ item.acf.namn }}</h2>
                <div class="desc-text" v-if="english">{{ item.acf.beskrivning_en }}</div>
                <div v-else class="desc-text">{{ item.acf.beskrivning }}</div>
                <div  :id="i" @click="hide(item.id, i)" class="arrow-holder right">
                  <div class="arrow"></div>
                </div>
                <h3 :id="item.id+'en'" v-if="english">{{ showText }}</h3>
                <h3 :id="item.id+'sv'" v-else>{{ visaText }}</h3>
              </div>

              <figure style="display: none" :id="item.id">
                <iframe
                  :src='"https://docs.google.com/viewer?url="+item.acf.google_docs_lank+"&amp;hl=sv&amp;embedded=true"'
                ></iframe>
              </figure>

              <div style="padding-top: 15px">
                <div>
                  <img class="img-pdf" src="../../assets/img/pdf-download.png" />
                  <a v-if="english" :href="item.acf.google_docs_lank_en">
                    <h3>Download PDF</h3>
                  </a>
                  <a v-else :href="item.acf.google_docs_lank">
                    <h3>Ladda ner PDF</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <KommandeEvent />
      <Sponsor />
    </div>
    <Instagram />
  </div>
</template>

<script>
import Sponsor from "~/components/Sponsor.vue";
import Instagram from "~/components/Instagram.vue";
import KommandeEvent from "~/components/kommandeEvent.vue";
import SyncLoader from "vue-spinner/src/SyncLoader.vue";
import $ from "jquery";

export default {
  components: {
    Sponsor,
    Instagram,
    KommandeEvent,
    SyncLoader
  },
  data() {
    return {
      loading: true,
      color: "#eb5e43",
      upDownClass: "arrow-holder right",
      visaText: "Visa PDF",
      showText: "Show PDF"
    };
  },
  methods: {
    hide(id, i) {
      $('#'+id).toggle();
      $('#'+i).toggleClass('right down');
      
      if( $('#'+i).attr('class') === 'arrow-holder right' ) {
          
      }
    },
    current_url: function() {
      var url = this.$route.path.split("/");
      return url[url.length - 1];
    },
    current_page: function(pagesArr, url) {
      for (var i = 0; i < pagesArr.length; i++) {
        if (pagesArr[i].slug == url) {
          return pagesArr[i];
        }
      }
    },
    toggle(id) {
      console.log(id);
    }
  },
  computed: {
    english() {
      return this.$store.state.english;
    },
    cur_page() {
      return this.current_page(this.$store.state.pages, this.current_url());
    },
    policy() {
      return this.$store.state.policy;
    }
  },
  async mounted() {
    await this.$store.cache.dispatch("get_allPages");
    await this.$store.cache.dispatch("get_policy");
  }
};
</script>

<style lang="scss" scoped>

.item__main {
    padding-bottom: 50px;
}

.post-title {
    margin: 0;
}
.arrow {
  background-color: #000 !important;

  &::before {
    background-color: #000 !important;
  }
}

a {
  color: #000;
}
.img-pdf {
  float: left;
  width: 34px;
}

.desc-text {
  margin: 10px 0 20px 0;
}

h3 {
  padding-left: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.plain {
  text-align: left;
  &-background {
    background-image: url("../../assets/img/plain_placeholder.jpg");
  }
  figure {
    overflow: hidden;
    padding-top: 100%;
    position: relative;

    iframe {
      border: 0;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
}
.arrow-holder {
  float: left;
}

.item {
  width: 100%;
  padding: 12px 0px;

  &__main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.banner {
  text-align: center;
  display: inline-block;

  &-background {
    height: 150px;
    text-align: center;
    font-size: 20px;
    position: relative;
    overflow: hidden;

    > h3,
    img {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 50%;
    }
    h3 {
      color: #fff;
      z-index: 2;
      text-shadow: 0px 0px 8px rgba(50, 50, 50, 0.9);
    }

    img {
      width: 100%;
    }
  }

  &-kontakt {
    margin-bottom: 15px;
    h4 {
      margin: 10px 0;
    }
    h5 {
      margin: 15px 0;
      font-weight: 50;
    }
  }

  &-picture {
    border-radius: 50%;
    overflow: hidden;
    width: 160px;
    height: 160px;
    position: relative;
    margin: 5px auto 20px auto;

    img {
      max-width: 100%;
      height: auto;

      &::after {
        content: "";
        clear: both;
        display: table;
      }
    }
  }
}
</style>