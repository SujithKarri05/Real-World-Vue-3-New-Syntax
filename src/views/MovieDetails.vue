<script setup>
import {onMounted, ref} from 'vue'
import EventService from '../services/EventService'

const event = ref(null)
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})
onMounted(() => {
  EventService.getEvent(props.id, props.category)
    .then(response => {
      event.value = response.data
    })
    .catch(error => {
      console.error('Error fetching event:', error)
    })
})
</script>
<template>
  <div v-if="event">
    <h1 class="event-details">{{ event.title }}</h1>
    <p>@{{ event.time }} on {{ event.date }}</p>
    <p>{{ event.description }} </p>
  </div>
</template>