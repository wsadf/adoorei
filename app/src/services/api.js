import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com/",
})

axios.defaults.withCredentials = true

export default api;