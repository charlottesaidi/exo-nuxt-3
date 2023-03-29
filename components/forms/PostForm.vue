<template>
  <form name="post_form" id="post_form" @submit.prevent="submit">
    <Transition name="fadeIn">
      <div v-if="show">
        <p class="mb-4 p-3 border border-green-800 bg-green-100 text-green-800 rounded">{{message}}</p>
      </div>
    </Transition>
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
    <div @click="show = !show">
      <Button
        buttonLabel="Ajouter"
        type="submit"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "PostForm",
  props: {
    author_id: 0
  },
  data() {
    return {
      post: {
        author_id: 0,
        title: '',
        body: '',
        date: '2023-03-22 11:27:49'
      },
      message: '',
      show: false
    }
  },
  transition: 'addPost',
  methods: {
    async submit() {
      this.post.author_id = this.author_id
      let res = await this.$services.posts.post(this.post)
      if(res.success) {
        this.message = 'Article posté avec succès';
      }
    }
  }
}
</script>

<style scoped>
  .fadeIn-enter {
    opacity: 0;
  }
  .fadeIn-enter-active, .fadeIn-leave-active {
    transition: opacity .8s;
  }
</style>
