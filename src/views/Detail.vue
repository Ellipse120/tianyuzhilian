<script setup>
import { useRouteQuery } from '@vueuse/router'

const id = useRouteQuery('id')
let model = $ref(null)

const getDetail = (id) => {
  model = {
    id: id,
    title: 'Title',
    content: 'LoremQuis reprehenderit sit nulla qui incididunt voluptate'
  }
}

id && getDetail(id)

</script>

<template>
  <div>
    <div class="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/tech);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-3 text-5xl font-bold">动态资讯</h1>
          <p class="text-indigo-300">Dynamic information</p>
        </div>
      </div>
    </div>

    <div class="divider text-center text-2xl text-blue-800 font-bold tracking-wider px-8 py-12">
      网络通信方案轻松设计
    </div>

    <div class="grid grid-cols-2 grid-rows-[70px,1fr] gap-4  text-2xl p-8 m-8 mt-0 pt-0 rounded-lg  bg-base-200 text-center text-blue-800">
      <div class="col-span-2 text-3xl flex items-center justify-center">
        <div class="bg-clip-border bg-blue-800 text-white rounded-b-3xl p-4 w-1/2">
          {{ model?.title }}
        </div>

        
      </div>

      <div>
        {{ model.content }}
      </div>
    </div>
  </div>
</template>