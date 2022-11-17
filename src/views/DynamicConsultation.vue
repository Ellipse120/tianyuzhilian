<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const toDetail = (item) => {
  router.push({
    name: 'DynamicConsultationDetail',
    query: {
      id: item
    }
  })
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
        class="flex items-center justify-around  bg-base-100 hover:bg-base-300 shadow-xl p-2 mb-2 cursor-pointer" 
        v-for="item in 10"
        :key="item"
        tag="div"
        :to="`/dynamic-consultation/detail?id=${item}`"
      >
        <figure><img src="https://placeimg.com/150/150/arch" alt="Album"/></figure>
        
        <div class="mx-2">
          <span class="text-sm">11/17</span>
          <br>
          <span class="text-xs">2022</span>
        </div>

        <div class="divider divider-horizontal"></div>

        <div>
          <div class="text-lg mb-2">中国5G发展现状与未来趋势</div>
          <div class="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate quae saepe quod in voluptatem itaque porro neque cupiditate eius, reiciendis inventore maxime quam. Modi molestiae placeat ipsum iste eligendi.
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