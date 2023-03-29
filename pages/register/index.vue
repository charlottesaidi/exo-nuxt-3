<template>
  <div class="container md:container md:mx-auto">
    <h1
      class="mb-4 py-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
    >
      Inscription
    </h1>
    <UserForm />
  </div>
</template>

<script>
import UserForm from "~/components/forms/UserForm.vue";

export default {
  name: "register.index",
  components: {UserForm},
}
</script>

<style scoped>

</style>
