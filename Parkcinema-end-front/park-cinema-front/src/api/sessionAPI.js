import { HttpClient } from ".";

class SessionAPI extends HttpClient {
  constructor() {
    super({ baseUrl: "/Sessions" });
  }

  getSessionByBRanchId = (id) => {
    return this.getRequest({ url: `/GetSessionsByBranchId/${id}` });
  };
}

export const sessionAPI = new SessionAPI();
