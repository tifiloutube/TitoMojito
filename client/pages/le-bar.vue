<script setup lang="ts">

import AboutHeader from "~/components/LeBarPage/AboutHeader.vue";
import Founders from "~/components/LeBarPage/Founders.vue";
import Concept from "~/components/LeBarPage/Concept.vue";
import Equipe from "~/components/LeBarPage/Equipe.vue";
import ContactRecrutement from "~/components/LeBarPage/ContactRecrutement.vue";

useHead({
  title: 'TitoMojito - Bar à mojitos'
})
</script>

<template>
  <AboutHeader />
  <Concept />
  <Founders />
  <Equipe />
  <ContactRecrutement />
</template>

<style scoped>

</style>