<template>
  <div class="container md:container md:mx-auto">
    <h1
      class="mb-4 py-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
    >
      Poster un MiaouArticle
    </h1>
      <PostForm :author_id="user.id" />
  </div>
</template>

<script>
import PostForm from "~/components/forms/PostForm.vue";

export default {
  name: "Add",
  components: {PostForm},
  data() {
    return {
      user: null
    }
  },
  transition: 'addPost',
  created() {
    if(this.$services.auth.isLogged()) {
      this.user = this.$services.auth.getUser()
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .addPost-enter {
    opacity: 0;
  }
  .addPost-enter-active, .addPost-leave-active {
    transition: opacity .5s;
  }
</style>
