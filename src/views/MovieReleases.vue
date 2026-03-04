<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { onMounted, ref } from 'vue'

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
})

const events = ref(null)
onMounted(()  => {
  const request =
    props.category === 'new-release'
      ? EventService.getNewReleases()
      : EventService.getClassics()

  request
    .then(response => {
      events.value = response.data
    })
    .catch(error => {
      console.error('Error fetching events:', error)
    })
})
</script>

<template>
  <div v-if="events" class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
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
