<script setup>
import { marked } from 'marked'
import { useRouteQuery } from '@vueuse/router'

const id = $(useRouteQuery('id'))
let model = $ref(null)

const getDetail = async (v) => {
   const res = await fetch(`http://localhost:1337/api/items/${v}`, {
    headers: {
      Authorization: `Bearer f8f6798061963d7672baa9b45927b991f07b6376ad715483c0fe3816f08f6d612ba09c6122d4381d165085a3b8546bb21884c9a4e0c047c1a426697890e8d5195b804e47f06c948c6b8a621065359a6608e596a4660338a030600264f89525958a40997815a4ee2d3ba16a4f892e5f5aa95cb980f8d3760011a557a673f291a2`
    },
   })
  const d = await res.json()
  console.log(d.data);
  model = d.data
}

id && getDetail(id)

const renderContent = (v) => {
  if (!v) return ''
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

    <div class="grid grid-cols-1 grid-rows-[70px,1fr] gap-4  text-2xl p-8 m-8 mt-0 pt-0 rounded-lg  bg-base-200 text-center text-blue-800">
      <div class="text-3xl flex flex-col items-center justify-center">
        <div class="bg-clip-border bg-blue-800 text-white rounded-b-3xl p-4 w-1/2">
          {{ model?.attributes?.Title }}
        </div>

        <div>
          {{ model?.attributes?.Description }}
        </div>
      </div>

      <div v-html="renderContent(model?.attributes?.Content)" />
    </div>
  </div>
</template>