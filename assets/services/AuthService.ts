export default class AuthService {
  isLogged() {
    if(process.client) {
      const token = localStorage.getItem("token")
      return !!token;
    }
    return false;
  }

  getUser() {
    if(process.client) {
      const token = localStorage.getItem("token")
      return token ? JSON.parse(token) : null
    } else {
      return null;
    }
  }

  logout() {
    if(process.client) {
      const token = localStorage.getItem("token")
      if(token) {
        localStorage.removeItem("token");
        window.location.href = '/'
      }
    }
  }
}
