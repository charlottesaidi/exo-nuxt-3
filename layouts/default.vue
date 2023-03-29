<template>
  <div>
    <Header :user="user"/>
      <Nuxt />
    <Footer/>
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      user: null
    }
  },
  created() {
    if(this.$services.auth.isLogged()) {
      this.user = this.$services.auth.getUser()
    }
  }
}
</script>

<style scoped>
</style>
