import axios from 'axios'

const instance = axios.create({
  baseURL: `https://${import.meta.env.VITE_MOCK_API_SECRET}.mockapi.io/v1/api/jobs`
})

export default instance