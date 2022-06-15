import client from "./axios.service";
import authHeader from "./auth-header";


class ItemsService {
  getItems() {
    return client.get("items", { headers: authHeader() });
  }
}

export default new ItemsService();
