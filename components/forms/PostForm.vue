<template>
  <form name="post_form" id="post_form" @submit.prevent="submit">
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
      <label for="nom" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
      <input
        type="text"
        id="description"
        v-model="post.body"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <Button
      buttonLabel="Ajouter"
      type="submit"
    />
  </form>
</template>

<script>
export default {
  name: "PostForm",
  props: {
    submit: { type: Function }
  },
  data() {
    return {
      post: {
        author_id: 17,
        title: '',
        body: '',
        date: new Date()
      }
    }
  },
}
</script>

<style scoped>

</style>
