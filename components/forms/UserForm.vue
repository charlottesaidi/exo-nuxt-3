<template>
  <form name="post_form" id="post_form" @submit.prevent="submit">
    <div v-if="message">
      <p class="mb-4 p-3 border border-green-800 bg-green-100 text-green-800 rounded">{{message}}</p>
    </div>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse email</label>
      <input
        type="email"
        id="email"
        v-model="user.email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <div class="mb-6">
      <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
      <input
        type="password"
        id="password"
        v-model="user.password"
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
  name: "UserForm",
  data() {
    return {
      user: {
        email: '',
        password: '',
        roles: 'user'
      },
      message: ''
    }
  },
  methods: {
    async submit() {
      let res = await this.$services.users.post(this.user)
      if(res.success) {
        this.message = 'Inscription réussie';
      }
    }
  }
}
</script>

<style scoped>

</style>
