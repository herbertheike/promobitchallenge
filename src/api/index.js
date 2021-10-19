import axios from "axios";
import handler from "../pages/api/cors";
handler

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  https: config,
});
export default api;