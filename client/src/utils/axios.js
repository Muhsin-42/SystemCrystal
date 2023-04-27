import axios from 'axios'
import {serverBaseUrl} from './constants'
const instance = axios.create({
    baseURL : serverBaseUrl
})

export default instance;