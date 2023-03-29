<template>
  <div class="md:container md:mx-auto">
    <h1 class="mb-4 py-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">{{post.title}}</h1>
    <div class="my-5">
      <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          class="object-cover rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-l-lg"
          :src="'../../placeholder.svg'"
          alt=""
          width="400px"
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post.body }}</p>
        </div>
      </div>
      <div class="mt-4 p-3 shadow">
        <h3>MiaouCommentaires</h3>
        <div class="p-3" v-for="comment in comments">
          <div class="flex justify-between">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{comment.email}} a écrit : </p>
            <p>{{comment.commentDate}}</p>
          </div>
          <p>{{comment.commentBody}}</p>
        </div>
      </div>
      <div v-if="user" class="mt-3">
        <CommentForm :article_id="post.id" :author_id="user.id" />
      </div>
      <div v-if="user && user.roles === 'admin'">
        <h2 class="my-4 py-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"> Modifier ce MiaouArticle</h2>
        <form name="post_form" id="post_form" @submit.prevent="update">
          <div v-if="message">
            <p class="mb-4 p-3 border border-green-800 bg-green-100 text-green-800 rounded">{{message}}</p>
          </div>
          <div class="mb-6">
            <label for="nom" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
            <input
              type="text"
              id="nom"
              v-model="post.title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-6">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea
              type="textarea"
              id="description"
              v-model="post.body"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <Button
            buttonLabel="Modifier"
            type="submit"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CommentForm from "~/components/forms/CommentForm.vue";

export default {
  name: "Detail",
  components: {CommentForm},
  data() {
    return {
      post: Object,
      comments: Array,
      message: '',
      user: null
    }
  },
  created() {
    if(this.$services.auth.isLogged()) {
      this.user = this.$services.auth.getUser()
    }
  },
  async asyncData({app, route}) {
    let post = await app.$services.posts.getOne(route.params.id)
    let comments = await app.$services.comments.findAll(route.params.id)
    return {
      post: post.data[0],
      comments: comments.data
    };
  },
  methods: {
    async update() {
      let res = await this.$services.posts.update(this.$route.params.id, this.post)
      if(res.success) {
        let post = await this.$services.posts.getOne(this.$route.params.id)
        this.post = post.data[0];
        this.message = 'Article modifié avec succès';
      }
    }
  }
}
</script>

<style scoped>

</style>
