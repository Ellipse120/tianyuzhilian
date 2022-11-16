<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <Header />

        <RouterView />

        <Footer />
      </div>
    </template>

    <template #fallback>
      <div class="text-blue-500 text-3xl text-center p-8">
        加载中
      </div>
    </template>
  </Suspense>
</template>