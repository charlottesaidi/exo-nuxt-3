import {Article} from "~/assets/data/Article";
export default class PostService {
  public axios: any
   constructor($axios: any) {
     this.axios = $axios;
   }

   async findAll() {
    let data: Array<Article> = []
    await this.axios.get('http://localhost:4000/articles/getArticle').then((response: any) => {
      data = response.data.data;
    })
    return data;
   }

   async getOne(id: number | string) {
    let data = {}
     await this.axios.get('http://localhost:4000/articles/get/single/article/'+id).then((response: any) => {
       data = response.data.data
     });
    return data;
   }

   async post(article: any) {
    let data = {}
     await this.axios.post('http://localhost:4000/admin/createArticle', article).then((response: any) => {
       data = response.data
     });
     return data;
   }

  async update(id: number | string, article: any) {
    let data = {}
    await this.axios.put('http://localhost:4000/admin/update/single/article/'+id, article).then((response: any) => {
      data = response.data
    });
    return data;
  }

  async delete(id: number | string) {
    let data = {}
    await this.axios.delete('http://localhost:4000/admin/delete/single/article/'+id).then((response: any) => {
      data = response.data
    });
    return data;
  }
}
