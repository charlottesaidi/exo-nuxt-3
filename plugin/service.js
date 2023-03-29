import PostService from "~/assets/services/PostService";
import CommentService from "~/assets/services/CommentService";
import UserService from "~/assets/services/UserService";
import AuthService from "~/assets/services/AuthService";
export default ({ app }, inject) => {
  const services = {
    posts: new PostService(app.$axios),
    comments: new CommentService(app.$axios),
    users: new UserService(app.$axios),
    auth: new AuthService()
  }

  inject('services', services)
}
