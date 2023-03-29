<template>

  <header>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
          <Logo />
        </a>
        <div class="flex items-center md:order-2">
          <Button
            type="link"
            url="login"
            buttonLabel="Connexion"
          />
          <div class="ml-3">
            <Button
              type="link"
              url="/register"
              buttonLabel="Inscription"
            />
          </div>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NuxtLink to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Accueil</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/posts" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Posts</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/posts/add" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Publier</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
