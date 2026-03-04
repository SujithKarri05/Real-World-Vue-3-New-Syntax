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
  // getMovies(category) {
  //   return apiClient.get(`/${category}/events`)
  // },
  getNewReleases(perPage, page) {
    return apiClient.get('/new-release/events?_limit=' + perPage + '&_page=' + page)
  },
  getClassicMovies(perPage, page) {
    return apiClient.get('/classic-release/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id, category) {
    return apiClient.get(`/${category}/events/${id}`)
}
}