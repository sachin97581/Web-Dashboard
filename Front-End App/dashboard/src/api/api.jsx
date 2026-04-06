import axios from "axios";

const API = axios.create({
  baseURL: "https://web-dashboard-uilj.onrender.com", // your backend URL
});

export default API;