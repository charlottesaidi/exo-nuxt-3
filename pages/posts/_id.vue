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
      <div class="mt-3">
        <h3>MiaouCommentaires</h3>
        <div class="p-3" v-for="comment in comments">
          <div class="flex justify-between">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{comment.email}} a écrit : </p>
            <p>{{comment.date}}</p>
          </div>
          <p>{{comment.body}}</p>
        </div>
      </div>
      <h2 class="my-4 py-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"> Modifier ce MiaouArticle</h2>
      <PostForm :submit="update"/>
    </div>
  </div>
</template>

<script>
import PostForm from "~/components/forms/PostForm.vue";

export default {
  name: "Detail",
  components: {PostForm},
  data() {
    return {
      post: Object,
      comments: Array
    }
  },
  async asyncData({app, route}) {
    let post = await app.$services.posts.getOne(route.params.id)
    let comments = await app.$services.comments.findAll(route.params.id)
    console.log(comments)
    return {
      post: post.data[0],
      comments: comments.data
    };
  },
  methods: {
    async update() {
      let res = await this.$services.posts.update(this.$route.params.id, this.post)
      console.log(res)
    }
  }
}
</script>

<style scoped>

</style>
