<template>
  <NuxtLayout>
    <Menu />
    <NuxtPage />
    <Footer />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Footer from "~/components/Shared/Footer.vue";
import Menu from "~/components/Shared/Menu.vue";
import Lenis from '@studio-freight/lenis'

onMounted(() => {
  const lenis = new Lenis()

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})
</script>