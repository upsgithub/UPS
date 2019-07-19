<template>
  <div v-if="eventExists" class="upcoming-event">
    <h4 v-if="english" class="event-header" >Upcoming events</h4>
        <h4 v-else class="event-header" >Kommande event</h4>
    <div class="flex-container-event">
      <sync-loader v-if="this.$store.state.loading && !this.$store.cache.has('get_kalender')" :loading="this.$store.state.loading && !this.$store.cache.has('get_kalender')" :color="color" class="vue-spinner"></sync-loader>
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
import axios from 'axios';
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

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
  async mounted() {
    await this.$store.cache.dispatch('get_kalender');
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
      return this.$store.getters.kalender.length !== 0;
    },
      filteredItems() {
        return this.$store.getters.kalender;
     },
     english(){
         return this.$store.state.english;
     },
     lang(){
         if(this.english){
             return "en";
         } else {
             return "sv";
         }
     }
      
  }
};
</script>
