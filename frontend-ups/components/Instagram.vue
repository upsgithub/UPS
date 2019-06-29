<template>
  <div class="container--full ig-container">
    <div class="content-wrapper">
    <div class="ig-wrapper" >
      <img class="ig-logo" src="../assets/img/insta.png">
      <h3>uppsalapolitices</h3>
    <vue-instagram token="37108703.1677ed0.3fbc500e19324c9184ff4875de875e84" :count="4">
      <template slot="feeds" slot-scope="props">
        
        <img class="ig-img" :src="props.feed.images.low_resolution.url" alt="Image" />
        
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
  data: {
    token: "37108703.1677ed0.3fbc500e19324c9184ff4875de875e84"
  }
};
</script>