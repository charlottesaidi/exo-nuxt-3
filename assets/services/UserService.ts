import {User} from "~/assets/data/User";
export default class PostService {
  public axios: any
  constructor($axios: any) {
    this.axios = $axios;
  }

  async login(user: User) {
    let data = {}
    await this.axios.post('http://localhost:4000/users/login', user).then((response: any) => {
      data = response.data
    });
    return data;
  }
}
