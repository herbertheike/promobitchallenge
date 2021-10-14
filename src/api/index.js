import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
const api = axios.create({
  baseURL: "http://localhost:8010/proxy",
  https: config,
});
export default api;