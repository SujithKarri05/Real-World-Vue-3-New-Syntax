<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
      <RouterLink :to="{ name: 'movie-details', params: { id: event.id,category: event.category } }">
    <div
      class="event-card"      
      :style="event.poster ? {
      backgroundImage: `url(${event.poster})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat'
      } : {}"
    ></div>
    <h2 class="event-title">{{ event.title }}</h2>
    <span>@{{ event.time }} on {{ event.date }}</span>

    </RouterLink>
  </div>
</template>

<style scoped>
.event-card {
  padding: 200px;
  width: 100px;
  min-height: 200px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  border-radius: 8px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0px rgba(0, 0, 0, 0.2);
}
</style>