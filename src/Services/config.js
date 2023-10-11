 import axios from "axios"

 const api = axios.create({
    baseURL:'https://geo.ipify.org/api/v2/country?apiKey=at_gTgxOekRxiaJiyTriQ4a0vyUy6934&ipAddress='
 })

 export default api;