import PostService from "~/assets/services/PostService";
import CommentService from "~/assets/services/CommentService";
import UserService from "~/assets/services/UserService";
export default ({ app }, inject) => {
  const services = {
    posts: new PostService(app.$axios),
    comments: new CommentService(app.$axios),
    users: new UserService(app.$axios)
  }

  inject('services', services)
}
