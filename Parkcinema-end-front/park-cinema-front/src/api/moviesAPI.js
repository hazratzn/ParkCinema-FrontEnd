import { HttpClient } from ".";

class MoviesAPI extends HttpClient {
  constructor() {
    super({ baseUrl: "/Movies" });
  }

  getMovies = () => {
    return this.getRequest({ url: "/GetMovies" });
  };
}

export const moviesApi = new MoviesAPI();
