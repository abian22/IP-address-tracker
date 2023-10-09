 import axios from "axios"

 const api = axios.create({
    baseURL:'https://geo.ipify.org/api/v2/country,city?apiKey=at_5FBqVjTmZZZhpRGUiusSjDXh57Bi1&ipAddress=8.8.8.8'
 })

 export default api;