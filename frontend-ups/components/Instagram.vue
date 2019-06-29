<template>
        <vue-instagram :token="token" :count="6" class="columns is-multiline is-mobile">
          <template slot="feeds" slot-scope="props">
            <div class="column is-4-desktop is-6-tablet is-6-mobile">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-square">
                    <img :src="props.feed.images.low_resolution.url" alt="Image">
                  </figure>
                </div>

                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image" style="height: 40px; width: 40px;">
                        <img :src="props.feed.user.profile_picture" alt="Image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{{ props.feed.user.full_name }}</p>
                      <p class="subtitle is-6">@ {{ props.feed.user.username }}</p>
                    </div>
                  </div>

                  <div class="content" style="height: 100px; overflow: auto;">
                    {{ props.feed.caption.text }}
                  </div>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item"><i class="fa fa-heart"></i> &nbsp; {{ props.feed.likes.count }}</p>
                  <p class="card-footer-item"><i class="fa fa-commenting"></i> &nbsp; {{ props.feed.comments.count }}</p>
                  <a :href="props.feed.link" target="_blank" class="card-footer-item"><i class="fa fa-external-link"></i> &nbsp; Link</a>
                </footer>
              </div>
            </div>
          </template>
        </vue-instagram>
</template>


<style lang="scss">

</style>

<script>

export default {

 
}
</script>