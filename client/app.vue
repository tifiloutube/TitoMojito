<template>
  <NuxtLayout>
    <Menu />
    <NuxtPage />
    <Footer />
  </NuxtLayout>
</template>
<script setup lang="ts">
import Footer from "~/components/Shared/Footer.vue";
import Menu from "~/components/Shared/Menu.vue";
</script>