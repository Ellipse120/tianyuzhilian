<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Logo from '@/assets/vue.svg'

const router = useRouter()
const menus = computed(() => router.getRoutes()?.filter(r => r.meta?.title))
const title = $ref('天域智联')
</script>

<template>
  <!-- <div class="navbar bg-black text-white sticky">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">{{ title }}</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0 hidden lg:flex">
        <router-link v-for="r in menus" :to="r.path">
          <li><a>{{ r.meta.title }}</a></li>
        </router-link>
      </ul>
    </div>
  </div> -->

  <div class="navbar bg-black text-white">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
        <router-link v-for="r in menus" :to="r.path">
          <li><a>{{ r.meta.title }}</a></li>
        </router-link>
      </ul>
    </div>
    <img :src="Logo" alt="logo" class="h-5" />
    <a class="btn btn-ghost normal-case text-xl">{{ title }}</a>
  </div>
  
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <router-link v-for="r in menus" :to="r.path">
        <li><a>{{ r.meta.title }}</a></li>
      </router-link>
    </ul>
  </div>
</div>
</template>