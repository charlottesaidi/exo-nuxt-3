<template>
  <div class="container md:container md:mx-auto">
    <h1
      class="mb-4 py-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
    >
      Poster un MiaouArticle
    </h1>
      <PostForm :submit="submit"/>
  </div>
</template>

<script>
import PostForm from "~/components/forms/PostForm.vue";

export default {
  name: "Add",
  components: {PostForm},
  methods: {
    async submit() {
      let res = await this.$services.posts.post(this.post)
      console.log(res)
    }
  }
}
</script>

<style scoped>

</style>
