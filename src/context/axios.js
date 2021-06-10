import axios from 'axios'

const instance = axios.create({
    // URL for cloud function
    baseURL: 'http://localhost:5001/clone-9f287/us-central1/api',
})

export default instance