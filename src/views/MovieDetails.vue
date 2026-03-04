<script setup>
import {ref, watch} from 'vue'
import EventService from '../services/EventService'

const event = ref(null)
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})
watch(() => [props.id, props.category], ([newId, newCategory]) => {
  const request = newCategory === 'new-release' 
  ?EventService.getNewReleaseEventDetails(newId)
  :EventService.getClassicEventDetails(newId)
  

  request
    .then(response => {
      event.value = response.data
    })
    .catch(error => {
      console.error('Error fetching event:', error)
    })
}, { immediate: true })
</script>
<template>
  <div v-if="event">
    <h1 class="event-details">{{ event.title }}</h1>
    <p>@{{ event.time }} on {{ event.date }}</p>
    <p>{{ event.description }} </p>
  </div>
</template>