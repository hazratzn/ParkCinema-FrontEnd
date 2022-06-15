import axios from "axios";

export const mainAPI = axios.create({
  baseURL: "https://localhost:44300/api",
});
