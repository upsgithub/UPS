<template>
  <div>
    <h4 v-if="empty_item()" class="event-header" >KOMMANDE EVENT</h4>
    <div class="flex-container-event">
      <div @click="clickBox( item.htmlLink )" class="event-box" v-for="item in filteredItems" :key="item.id" >
        <h4 class="event-text">{{ item.summary }}</h4>
        <h4 class="event-text event-date">{{ changeDate(item.start.dateTime) }}</h4>
      </div>
    </div>
  </div>
</template>

<style lang="sass">

</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      api_url: "https://www.googleapis.com/calendar/v3/calendars/lucas.bornegrim@gmail.com/events?key=AIzaSyCBdwd1xviBKSzFDHm3WHwh6QvSyrX9tGo",
      lang: "sv",
      options: { month: 'short', day: 'numeric' },
      items: [],
      date: "",
      event_start: ""
    };
  },

  created:function() {
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
              //this.items.push(response.data.items[i]);
              this.$set( this.items, count, response.data.items[i] );
              count ++;
            }
          }
          this.items.sort((a, b) => (a.start.dateTime > b.start.dateTime) ? 1 : -1);
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
      filteredItems: function () {
        return this.items.slice(0, 4)
     },

      
  }
};
</script>
