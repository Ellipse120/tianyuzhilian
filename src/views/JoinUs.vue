<script setup>
import { useResume } from '@/composable'
import UserIcon from '@/components/UserIcon.vue'
import Education from '@/components/EducationIcon.vue'
import Location from '@/components/Location.vue'
import Email from '@/components/Email.vue'
import Map from '@/assets/map.png'

const { resumes } = useResume()
</script>

<template>
  <div>
    <div class="hero min-h-[20rem]" style="background-image: url(https://placeimg.com/1000/800/tech);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">AI+网络通信设计</h1>
          <p class="mb-5 text-indigo-300">AI+Network Communication Design</p>
        </div>
      </div>
    </div>

    <div class="divider text-2xl lg:text-3xl text-blue-800 font-bold tracking-wider p-2 lg:px-8 lg:py-12">让你轻松设计网络通信方案</div>

    <div class="text-2xl p-8 m-8 mt-0 pt-0 rounded-lg  bg-base-200 text-center text-blue-800">
      <div class="text-2xl lg:text-3xl flex items-center justify-center">
        <div class="bg-clip-border bg-blue-800 text-white rounded-b-3xl p-4 lg:w-1/2">
          招贤纳士
        </div>
      </div>

      <div class="text-black">
        <div
          class="grid lg:grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 w-full my-12 sm:my-6"
          v-for="t in resumes"
          :key="t.type"
        >
          <div class="flex flex-col items-center justify-center lg:border-r lg:px-16 lg:mx-16">
            <div class="flex items-center justify-start w-full mb-8 text-center">
              <UserIcon class="mr-4" />
              <div>{{ t.type }}</div>
            </div>
            <div class="flex items-center justify-start w-full">
              <Education class="mr-4" />
              <div>{{ t.xueli }}</div>
            </div>
          </div>

          <div class="text-left text-sm" v-html="t.jd"></div>
        </div>
      </div>
    </div>

    <div class="text-2xl p-8 m-8 mt-0 pt-0 rounded-lg  bg-base-200 text-center text-blue-800">
      <div class="text-2xl lg:text-3xl flex items-center justify-center">
        <div class="bg-clip-border bg-blue-800 text-white rounded-b-3xl p-4 lg:w-1/2">
          联系我们
        </div>
      </div>

      <div class="grid lg:grid-cols-2 grid-rows-[1fr,72px,72px,72px] lg:grid-rows-[1fr,100px] place-items-center gap-8 mt-8">
        <div class="w-full h-full">
          <figure><img :src="Map" class="w-full h-[260px] lg:h-[300px]" alt="Map" /></figure>
        </div>

        <div class="h-full text-left w-full text-black flex items-start justify-center flex-col">
          <div class="text-xl mb-4">与我们联系</div>

          <div class="text-xs mb-2">欢迎与我们取得联系</div>
          <div class="text-xs">我们将提供最好的服务给你</div>
        </div>

        <div class="text-left lg:text-right w-full flex flex-col items-start lg:items-end justify-end text-black">
          <Location class="h-[1.5rem] w-[1.5rem] mb-2" />

          <div class="text-xs">注册地址</div>
          <div class="text-xs">中国（上海）自由贸易试验区临港新片区</div>
          <div class="text-xs">环湖西二路C楼</div>
        </div>

        <div class="text-left w-full flex flex-col items-left justify-start text-black">
          <Email class="h-[1.5rem] w-[1.5rem] mb-2" />

          <div class="text-xs">服务邮箱</div>
          <div class="text-xs"><a href="mailto:tianyuzi2022@163.com">tianyuzi2022@163.com</a></div>
        </div>
      </div>
    </div>

  </div>
</template>
