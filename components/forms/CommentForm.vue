<template>
  <form name="comment_form" id="comment_form" @submit.prevent="submit">
    <div v-if="message">
      <p class="mb-4 p-3 border border-green-800 bg-green-100 text-green-800 rounded">{{message}}</p>
    </div>
    <div class="mb-6">
      <label for="comment" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Commentaire</label>
      <textarea
        type="textarea"
        id="comment"
        v-model="comment.body"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></textarea>
    </div>
    <Button
      buttonLabel="Publier"
      type="submit"
    />
  </form>
</template>

<script>
export default {
  name: "CommentForm",
  props: {
    article_id: 0
  },
  data() {
    return {
      comment: {
        author_id: 20,
        article_id: 0,
        body: '',
        date: '2023-03-22 11:27:49'
      },
      message: ''
    }
  },
  methods: {
    async submit() {
      this.comment.article_id = this.article_id
      let res = await this.$services.comments.post(this.comment)
      if(res.success) {
        this.message = 'Commentaire posté avec succès';
      }
    }
  }
}
</script>

<style scoped>

</style>
