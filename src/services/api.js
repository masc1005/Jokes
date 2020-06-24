import axios from 'axios'

const api = axios.create({
    baseURL: 'https://official-joke-api.appspot.com/jokes/random'
})

export default api