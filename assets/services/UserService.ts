import {User} from "~/assets/data/User";
export default class PostService {
  public axios: any
  constructor($axios: any) {
    this.axios = $axios;
  }

  async login(user: User) {
    let data = {}
    await this.axios.post('http://localhost:4000/auth/login', user).then((response: any) => {
      data = response.data
    });
    return data;
  }

  async post(user: any) {
    let data = {}
    await this.axios.post('http://localhost:4000/auth/register', user).then((response: any) => {
      data = response.data
    });
    return data;
  }
}
