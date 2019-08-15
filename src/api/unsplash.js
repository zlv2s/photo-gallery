import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 21e91ee91286ef2ac3b85080bec48a18030662319109d5bb381e5183b566fdc2'
  }
})