<template>
  <div>
    <div class="container--full">
      <div class="content-wrapper">
        <FullCalendar
          :fixedWeekCount="fixedWeekCount"
          :showNonCurrentDates="showNonCurrentDates"
          :buttonText="buttonText"
          :locale="locale"
          :timeFormat="timeFormat"
          :firstDay="firstDay"
          :eventTimeFormat="eventTimeFormat"
          :weekNumbersWithinDays="weekNumbersWithinDays"
          :weekNumbers="weekNumbers"
          :events="events"
          :googleCalendarApiKey="googleCalendarApiKey"
          :defaultView="defaultView"
          :plugins="calendarPlugins"
        />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

</style>


<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import frLocale from "@fullcalendar/core/locales/sv";
import Sponsor from "~/components/Sponsor.vue";
import Instagram from "~/components/Instagram.vue";

export default {
    components: {
        FullCalendar,
        Sponsor,
        Instagram
    },
    data() {
        return {
            fixedWeekCount: false,
            showNonCurrentDates: false,
            buttonText: {
                today: "Idag"
            },
            locale: "sv",
            defaultView: "dayGridMonth",
            firstDay: 1,
            calendarPlugins: [dayGridPlugin, googleCalendarPlugin],
            googleCalendarApiKey: "AIzaSyCBdwd1xviBKSzFDHm3WHwh6QvSyrX9tGo",
            weekNumbers: true,
            weekNumbersWithinDays: true,
            events: {
                googleCalendarId: "lucas.bornegrim@gmail.com"
            },
            timeFormat: "HH:mm",
            eventTimeFormat: {
                hour: "numeric",
                minute: "2-digit"
                //meridiem: "short"
            }
        };
    }
};
</script>
