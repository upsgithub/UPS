<template>
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
</template>

<style lang="scss">
@media only screen and (min-width: 768px) {
    .fc{
        margin: 0 20px;
    }
}
</style>


<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import frLocale from "@fullcalendar/core/locales/sv";

export default {
    components: {
        FullCalendar
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
