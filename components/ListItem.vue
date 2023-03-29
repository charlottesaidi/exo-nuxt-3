<template>
  <div class="flex flex-col items-center h-full bg-white md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div class="flex flex-col justify-between p-4 leading-normal">
      <NuxtLink :to="'/posts/'+post.id">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
      </NuxtLink>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post.body }}</p>
      <div v-if="!disableDelete">
        <button
          v-if="!disableDelete"
          type="button"
          @click="deletion"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    post: Object,
    disableDelete: Boolean
  },
  data() {
    return {
      isAdmin: Boolean,
      token: null
    }
  },
  asyncData({app}) {
    if(process.client) {
      app.token = sessionStorage.getItem('token');
    }
    if(app.token && app.token === 'admin') {
      console.log('ah bon c true ?')
      this.isAdmin = true;
    }
  },
  methods: {
    deletion() {
      this.$emit('delete', this.post)
    }
  }
}
</script>

<style scoped>

</style>
