import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://rss-dev-api.pedr0.net/";

class ItemsService {
  getItems() {
    return axios.get(API_URL + "items", { headers: authHeader() });
  }
}

export default new ItemsService();
