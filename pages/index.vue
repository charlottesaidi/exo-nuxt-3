<template>
  <div class="container md:container md:mx-auto">
    <h1 class="mb-4 py-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">MiaouBlog</h1>
    <h2 class="mb-4 text-2xl font-bold">Derniers posts</h2>
    <div class="mb-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="post in posts"
        :key="post.id"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <ListItem :post="post" :disableDelete="true" :user="null"/>
      </div>
    </div>
    <div class="text-right">
      <Button
        type="link"
        url="/posts"
        buttonLabel="Voir plus"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      posts: Array
    }
  },
  async asyncData({ app }) {
    let res = await app.$services.posts.findAll()
    return {posts: res.data};
  }
}
</script>

<style scoped>

</style>
