<script setup lang="ts">

import AboutHeader from "~/components/LeBarPage/AboutHeader.vue";
import Founders from "~/components/LeBarPage/Founders.vue";
import Concept from "~/components/LeBarPage/Concept.vue";
import Gallery from "~/components/LeBarPage/Gallery.vue";

useHead({
  title: 'TitoMojito - Bar à mojitos'
})
</script>

<template>
  <AboutHeader />
  <Concept />
  <Founders />
  <ClientOnly>
    <Gallery />
  </ClientOnly>
</template>

<style scoped>

</style>