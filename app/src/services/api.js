import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com/",
})

axios.defaults.withCredentials = true
// axios.defaults.headers.get['header-name'] = 'value'

export default api;