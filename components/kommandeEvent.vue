<template>
  <div v-if="eventExists" class="upcoming-event">
    <h4 v-if="english" class="event-header" >Upcoming events</h4>
        <h4 v-else class="event-header" >Kommande event</h4>
    <div class="flex-container-event">
      <sync-loader v-if="this.$store.state.loading && !this.$store.cache.has('kalender/get')" :loading="this.$store.state.loading && !this.$store.cache.has('kalender/get')" :color="color" class="vue-spinner"></sync-loader>
      <div v-else @click="clickBox( item.htmlLink )" class="event-box" v-for="item in filteredItems" :key="item.id" >
        <h4 class="event-text event-text--name">{{ item.summary }}</h4>
        <h4 class="event-text event-date">{{ changeDate(item.start.realDate) }}</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.upcoming-event{
  margin: 40px 0;
}
</style>

<script>
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    SyncLoader
  },
  data() {
    return {
      loading: true,
      color: "#eb5e43", 
      options: { month: 'short', day: 'numeric' }
    };
  },
  async mounted(){
    await this.$store.dispatch('kalender/get')
  },
  methods: {
    clickBox(link) {
      window.location.href = link;
    },
    changeDate(date) {
      return new Date(date).toLocaleDateString(this.lang, this.options);
    } 
  },
  computed: {
    eventExists() {
      return this.kalenderGetter.length !== 0;
    },
    filteredItems() {
      return this.kalenderGetter;
    },
    lang(){
        if(this.english){
            return "en";
        } else {
            return "sv";
        }
    },
    ...mapState({
        english: state => state.pages.english
    }),
    ...mapGetters({
      kalenderGetter: 'kalender/kalenderGetter'
    }) 
  }
};
</script>
