import { HttpClient } from ".";

class HallAPI extends HttpClient {
  constructor() {
    super({ baseUrl: "/Hall" });
  }
  getHallsById = (id) => {
    return this.getRequest({ url: `/GetHallById/${id}` });
  };
}

export const hallAPI = new HallAPI();
