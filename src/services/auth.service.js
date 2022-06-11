import axios from "axios";

const API_URL = "https://rss-dev-api.pedr0.net/";

class AuthService {
  login(user) {
    axios.post(API_URL + "/auth/login", user).then((response) => {
      if (response.data.access_token && response.data.refresh_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }
}

export default new AuthService();
