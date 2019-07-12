<template>
  <div class="upcoming-event">
    <h4 v-if="english" class="event-header" >Upcoming events</h4>
        <h4 v-else class="event-header" >Kommande event</h4>
    <div class="flex-container-event">
      <sync-loader class="vue-spinner" :loading="loading" :color="color"></sync-loader>
      <div @click="clickBox( item.htmlLink )" class="event-box" v-for="item in filteredItems" :key="item.id" >
        <h4 class="event-text event-text--name">{{ item.summary }}</h4>
        <h4 class="event-text event-date">{{ changeDate(item.start.dateTime) }}</h4>
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
      api_url: "https://www.googleapis.com/calendar/v3/calendars/lucas.bornegrim@gmail.com/events?key=AIzaSyCBdwd1xviBKSzFDHm3WHwh6QvSyrX9tGo",
      options: { month: 'short', day: 'numeric' },
      items: [],
      date: "",
      event_start: ""
    };
  },

  created() {
    this.get_kommandeEvent(),
    this.get_date()
  },

  methods: {
    empty_item() {
      if (this.items.length === 0) {
        return false
      } else {return true}
    },
    clickBox(link) {
      window.location.href = link;
    },
    checkDate(event_start) {
      this.event_start = new Date(event_start.dateTime);
      var dateB = this.date;

      if (this.event_start > this.date) {
        return true;
      } else {
        return false;
      }
    },
    changeDate(date) {
      return new Date(date).toLocaleDateString(this.lang, this.options);
    },

    get_kommandeEvent:function() {
      axios.get(this.api_url)
        .then(response => {
          let count = 0;
          for (var i = 0; i < response.data.items.length; i++) {
            if (this.checkDate(response.data.items[i].start)) {
              this.$set( this.items, count, response.data.items[i] );
              count ++;
            }
          }
          this.items.sort((a, b) => (a.start.dateTime > b.start.dateTime) ? 1 : -1);
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    get_date() {
      var myDate = new Date();
      this.date = myDate;
    }
    
  },
  computed: {
      filteredItems() {
        return this.items.slice(0, 4)
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
