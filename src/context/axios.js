import axios from 'axios'

const instance = axios.create({
    // URL for cloud function
    baseURL: ''
})

export default instance