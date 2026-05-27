import axios from "axios";

const api = axios.create({
  baseURL: "https://vetcare-api-u8zr.onrender.com/"
});

export default api;