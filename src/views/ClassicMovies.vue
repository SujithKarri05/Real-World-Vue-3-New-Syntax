<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { ref, onMounted } from 'vue'

const props = defineProps(["page"])
const events = ref(null)
const fetchEvents = () => {
  EventService.getClassicMovies(1, props.page)
    .then(response => {
      events.value = response.data
    })
    .catch(error => {
      console.error('Error fetching events:', error)
    })
}

onMounted(() => {
  fetchEvents()
})
</script>

<template>
  <div v-if="events" class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
        <router-link :to="{ name: 'Classics', query: { page: page - 1 } }"
  rel="previous"
  v-if="page != 1"
  >Previous</router-link>

  <router-link :to="{ name: 'Classics', query: { page: page + 1 } }"
  rel="next"
  >Next</router-link>
</template>

<style scoped>
.events {
  display: flex;
  /* flex-wrap: wrap; */
  gap: 60px;
  padding-top: 20px;
  /* justify-content: center; */
}
</style>
