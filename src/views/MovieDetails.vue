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
  <div v-if="event" class="movie-details"
    :style="event.poster ? {
      backgroundImage: `url(${event.poster})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    } : {}"
  >
    <div class="overlay">
      <h1>{{ event.title }}</h1>
      <p>@{{ event.time }} on {{ event.date }}</p>
      <p>{{ event.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.movie-details {
  min-height: 80vh;
  border-radius: 8px;
  position: relative;
}
.overlay {
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  min-height: 80vh;
}
.overlay h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}
.overlay p {
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>