import client from "./axios.service";

class AuthService {
  authenticate(user) {
    return client.post("/auth/login", user).then((response) => {
      if (response.data.access_token && response.data.refresh_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }
}

export default new AuthService();
