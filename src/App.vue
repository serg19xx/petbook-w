<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header class="text-gray-600 body-font bg-white">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <RouterLink to="/">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">Petbook</span>
        </a>
      </RouterLink>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900">
          <RouterLink to="/">Home</RouterLink>
        </a>
        <a class="mr-5 hover:text-gray-900">
          <RouterLink to="/about">About</RouterLink>
        </a>
        <a class="mr-5 hover:text-gray-900">
          <RouterLink to="/profile">Profile</RouterLink>
        </a>
        <a class="mr-5 hover:text-gray-900">
          <RouterLink to="/petgallery">Pet gallery</RouterLink>
        </a>
      </nav>
      <div class="">
        <img class="inline-block size-10 rounded-full ring-2 ring-white ml-auto"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="">
      </div>
    </div>
  </header>
  <main>
    <div
      class="container max-w-[99%] md:max-w-3xl lg:max-w-4xl mx-auto bg-white my-2 border border-slate-300 rounded-md p-5 min-h-screen">
      <RouterView />
    </div>

  </main>
</template>

<style scoped></style>
