import axios from "axios";
const api = axios.create({
    baseURL: "https://abitus-api.geia.vip/",
timeout: 10000,
});
export default api;