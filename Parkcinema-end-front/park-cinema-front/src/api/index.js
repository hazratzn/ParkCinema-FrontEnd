import axios from "axios";

export class HttpClient {
  baseUrl = "https://localhost:44300/api";
  api;
  constructor({ baseUrl }) {
    this.baseUrl = this.baseUrl + baseUrl;
    this.api = axios.create({ baseUrl: this.baseUrl, url: "" });
  }
  getRequest = ({ url }) => {
    const withBaseUrl = this.baseUrl + url;
    return this.api.get(withBaseUrl);
  };
}
