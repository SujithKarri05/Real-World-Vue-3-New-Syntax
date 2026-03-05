<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { ref, onMounted, computed, watch } from 'vue'

  const props = defineProps(["page"])
const events = ref(null)
const totalEvents = ref(0)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 3)
  return props.page < totalPages
})
const fetchEvents = () => {
  EventService.getNewReleases(3, props.page)
    .then(response => {
      events.value = response.data
      totalEvents.value = response.headers["x-total-count"]
    })
    .catch(error => {
      console.error('Error fetching events:', error)
    })
}

onMounted(() => {
  fetchEvents()
})

watch(() => props.page, () => {
  events.value = null
  fetchEvents()
})
</script>

<template>
  <div v-if="events" class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
          <router-link :to="{ name: 'New Releases', query: { page: page - 1 } }"
  rel="previous"
  v-if="page != 1"
  >Previous </router-link>

  <router-link :to="{ name: 'New Releases', query: { page: page + 1 } }"
  rel="next"
  v-if="hasNextPage"
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
