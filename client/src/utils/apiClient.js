import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://citizen-portal-demo-api.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
