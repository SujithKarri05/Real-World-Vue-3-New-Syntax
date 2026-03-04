import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/SujithKarri05',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getClassics() {
    return apiClient.get('/db-vue/events')
  },
  getNewReleases() {
    return apiClient.get('/newReleases/events')
  },
  getClassicEventDetails(id) {
    return apiClient.get(`/db-vue/events/${id}`)
  },
  getNewReleaseEventDetails(id) {
    return apiClient.get(`/newReleases/events/${id}`)
  }
}