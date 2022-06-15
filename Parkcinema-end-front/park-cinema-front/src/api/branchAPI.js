import { HttpClient } from ".";

class BranchAPI extends HttpClient {
  constructor() {
    super({ baseUrl: "/Branch" });
  }
  getBranches = () => {
    return this.getRequest({ url: "/GetBranches" });
  };
  getMoviesByBranchId = (id) => {
    return this.getRequest({ url: `/GetMovieByBranchId/${id}` });
  };
  getBranchDetail = (id) => {
    return this.getRequest({ url: `/GetBranch/${id}` });
  };
  getSessionByBrancId = (id) => {
    return this.getRequest({ url: "" });
  };
}

export const branchAPI = new BranchAPI();
