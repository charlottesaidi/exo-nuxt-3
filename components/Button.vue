<template>
  <NuxtLink
    v-if="type === 'link'"
    :to="url"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    {{buttonLabel}}
  </NuxtLink>
  <button
    v-else
    :type="type"
    @click="eventHandler"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    {{ buttonLabel }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonLabel: String,
    type: String,
    url: String | null,
  },
  methods: {
    eventHandler() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
