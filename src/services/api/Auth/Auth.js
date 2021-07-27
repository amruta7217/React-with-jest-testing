import axios from "axios";

class Auth {
  constructor() {
    this.url = "http://localhost:8080";
  }

  // Login API

  async login(payload) {
    const actionUrl = "/login";
    const urlRequest = `${this.url}${actionUrl}`;

    return await axios.post(urlRequest, payload);
  }

  async registerUser(payload) {
    const actionUrl = "/register";
    const urlRequest = `${this.url}${actionUrl}`;

    return await axios.post(urlRequest, payload);
  }
}

export default Auth;
