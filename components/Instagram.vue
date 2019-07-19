<template>
  <div class="container--full ig-container">
    <div class="content-wrapper ig-wrapper">
        <vue-instagram :token="token" :count="1">
          <template slot="feeds" slot-scope="props">
            <a href="https://www.instagram.com/uppsalapolitices">
              
                <img class="ig-logo lazyload" :data-src="props.feed.user.profile_picture" />
              
              
                <h3 class="ig-h3">@{{ props.feed.user.username }}</h3>
              
            </a>
          </template>
        </vue-instagram>

        <div class="ig-flex">
          <vue-instagram :token="token" :count="4">
            <template slot="feeds" slot-scope="props">
              <img
                @click="clickIgImg(props.feed.link)"
                class="ig-img lazyload"
                :data-src="props.feed.images.low_resolution.url"
                alt="Image"
              />
            </template>
          </vue-instagram>
        </div>
    </div>
  </div>
</template>


<style lang="scss">
</style>

<script>
export default {
    data:function() {
        return {
            token: '1441523367.1677ed0.84515ba1c1de4a7ba69b2df1f8e21e4a' 
        }
    },
    methods: {
        clickIgImg(link) {
            window.location.href = link;
        },
        clickIgLogo(link) {
            window.location.href = link;
        }
    }
};
</script>