import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
const api = axios.create({
  baseURL: "/api/cors",
  https: config,
});
export default api;