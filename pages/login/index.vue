<template>
  <div class="container md:container md:mx-auto">
    <h1 class="mb-4 py-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Connexion</h1>
    <div v-if="error">
      <p class="mb-4 p-3 border border-red-800 bg-red-100 text-red-800 rounded">{{error}}</p>
    </div>
    <form @submit.prevent="login">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input
          type="text"
          id="email"
          v-model="user.email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
        <input
          type="password"
          id="password"
          v-model="user.password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <Button
        buttonLabel="Se connecter"
        type="submit"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    async login() {
      let res = await this.$services.users.login(this.user)
      if(res.error) {
        this.error = res.data
      }
    }
  }
}
</script>

<style scoped>

</style>
