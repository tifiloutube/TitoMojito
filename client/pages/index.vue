<script setup lang="ts">

import NomBarFlottant from "~/components/homePage/NomBarFlottant.vue";
import SloganVideoPresentation from "~/components/homePage/SloganVideoPresentation.vue";
import MojitoDuMois from "~/components/homePage/MojitoDuMois.vue";
import ApercuCarteBoissonNourriture from "~/components/homePage/ApercuCarteBoissonNourriture.vue";
import ReseauxSociauxHoraires from "~/components/homePage/ReseauxSociauxHoraires.vue";
import ContactChatRedirection from "~/components/homePage/ContactChatRedirection.vue";

useHead({
  title: 'TitoMojito - Bar à mojitos'
})
</script>

<template>
  <NomBarFlottant />
  <SloganVideoPresentation />
  <MojitoDuMois />
  <ApercuCarteBoissonNourriture />
  <ReseauxSociauxHoraires />
  <ContactChatRedirection />
</template>

<style scoped>

</style>