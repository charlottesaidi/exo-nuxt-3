<template>
  <div class="container md:container md:mx-auto">
    <h1 class="mb-4 py-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">MiaouBlog</h1>
    <div v-if="message">
      <p class="mb-4 p-3 border border-green-800 bg-green-100 text-green-800 rounded">{{message}}</p>
    </div>
    <TransitionGroup name="list" tag="div" class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <ListItem :post="post" @delete="deleteItem(post.id)" :user="user"/>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      posts: Array,
      message: '',
      user: null
    }
  },
  async asyncData({ app }) {
    let res = await app.$services.posts.findAll()
    return {posts: res.data};
  },
  created() {
    if(this.$services.auth.isLogged()) {
      this.user = this.$services.auth.getUser()
    }
  },
  methods: {
    async deleteItem(id) {
      let res = await this.$services.posts.delete(id)
      if(res.success) {
        let posts = await this.$services.posts.findAll()
        this.posts = posts.data;
        this.message = 'Article supprimé avec succès';
      }
    }
  }
}
</script>

<style scoped>
  .list-enter-active,
  .list-leave-active {
    transition: opacity 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
