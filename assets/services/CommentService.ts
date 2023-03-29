import {Comment} from "~/assets/data/Comment";

export default class CommentService {
  public axios: any
  constructor($axios: any) {
    this.axios = $axios;
  }

  async findAll(postId: number | string) {
    let data: Array<Comment> = []
    await this.axios.get('http://localhost:4000/articles/'+postId+'/comments').then((response: any) => {
      data = response.data.data;
    })
    return data;
  }

  async getOne(id: number | string) {
    let data = {}
    await this.axios.get('http://localhost:4000/articles/comment/'+id).then((response: any) => {
      data = response.data.data
    });
    return data;
  }

  async post(postId: number | string, comment: any) {
    let data = {}
    await this.axios.post('http://localhost:4000/articles/'+postId+'/createComment', comment).then((response: any) => {
      data = response.data
    });
    return data;
  }

  async update(id: number | string, comment: any) {
    let data = {}
    await this.axios.put('http://localhost:4000/articles/comment/update/'+id, comment).then((response: any) => {
      data = response.data.data
    });
    return data;
  }

  async delete(id: number | string) {
    let data = {}
    await this.axios.delete('http://localhost:4000/articles/comment/delete/'+id).then((response: any) => {
      data = response.data.data
    });
    return data;
  }
}
