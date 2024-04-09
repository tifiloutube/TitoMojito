<script setup lang="ts">

import EquipeHeader from "~/components/equipePage/EquipeHeader.vue";
import Staff from "~/components/equipePage/Staff.vue";
import ContactRecrutement from "~/components/equipePage/ContactRecrutement.vue";

useHead({
  title: 'TitoMojito - Bar à mojitos'
})
</script>

<template>
  <EquipeHeader />
  <Staff />
  <ContactRecrutement />
</template>

<style scoped>

</style>