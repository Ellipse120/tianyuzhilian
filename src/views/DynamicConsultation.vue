<script setup>
import { marked } from 'marked'

import Layout from '@/layouts/index.vue'

let list = $ref([])

const getData = async () => {
  const res = await fetch('http://localhost:1337/api/items?populate=Cover', {
    headers: {
      Authorization: `Bearer f8f6798061963d7672baa9b45927b991f07b6376ad715483c0fe3816f08f6d612ba09c6122d4381d165085a3b8546bb21884c9a4e0c047c1a426697890e8d5195b804e47f06c948c6b8a621065359a6608e596a4660338a030600264f89525958a40997815a4ee2d3ba16a4f892e5f5aa95cb980f8d3760011a557a673f291a2`
    },
  })
  const d = await res.json()
  console.log(d);
  list = d.data
}

getData()

const renderContent = (v) => {
  return marked(v)
}
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
          热点信息
        </div>
      </div>

      <div class="card shadow-xl image-full relative">
        <figure><img src="https://placeimg.com/300/300/arch" class="w-[300px] h-[300px]" alt="Shoes" /></figure>
        <div class="text-blue-800 absolute bottom-0 z-[10] w-64 p-2 bg-white rounded-bl-2xl rounded-tr-2xl">
          <h2 class="card-title text-base line-clamp-1">中国 5G 发展现状与未来趋势</h2>
          <div class="my-2 text-left">
            <p class="text-xs">我国移动通信技术起步虽晚，但在 5G 标准研发上正逐渐成为全球的领跑者</p>
          </div>
        </div>
      </div>

      <div class="card shadow-xl image-full relative">
        <figure><img src="https://placeimg.com/300/300/arch" class="w-[300px] h-[300px]"  alt="Shoes" /></figure>
        <div class="text-blue-800 absolute bottom-0 z-[10] w-64 p-2 bg-white rounded-bl-2xl rounded-tr-2xl">
          <h2 class="card-title text-base line-clamp-1">AI 辅助设计时代的三大设计应用思维</h2>
          <div class="my-2 text-left line-clamp-2">
            <p class="text-xs">大家不太适应直接看到方案被自动生成的感受，同时就生成方案能否直接使用的问题引发了不同层次的探讨</p>
          </div>
        </div>
      </div>
    </div>

    <div class="px-8 py-12">
      <router-link
        class="flex items-center justify-around bg-base-100 hover:bg-base-300 shadow-xl p-2 mb-2 cursor-pointer" 
        v-for="(t,index) in list"
        :key="index"
        tag="div"
        :to="`/dynamic-consultation/detail?id=${t.id}`"
      >
        <figure><img :src="'http://localhost:1337' + t.attributes.Cover.data.attributes.url" alt="Album" class="w-80" /></figure>
        
        <div class="mx-2">
          <span class="text-sm">11/17</span>
          <br>
          <span class="text-xs">2022</span>
        </div>

        <div class="divider divider-horizontal"></div>

        <div>
          <div class="text-lg mb-2">{{ t.attributes.Title }}</div>
          <div class="text-xs">
            {{ t.attributes.Description }}
          </div>
        </div>
      </router-link>

      <div class="text-center">
        <div class="btn-group">
          <button class="btn btn-xs btn-active">1</button>
          <button class="btn btn-xs">2</button>
          <button class="btn btn-xs">3</button>
          <button class="btn btn-xs">4</button>
        </div>
      </div>
    </div>
  </div>
</template>