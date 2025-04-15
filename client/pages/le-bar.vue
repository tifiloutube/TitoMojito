<script setup lang="ts">

import AboutHeader from "~/components/LeBarPage/AboutHeader.vue";
import Founders from "~/components/LeBarPage/Founders.vue";
import Concept from "~/components/LeBarPage/Concept.vue";
import Equipe from "~/components/LeBarPage/Equipe.vue";
import ContactRecrutement from "~/components/LeBarPage/ContactRecrutement.vue";

useHead({
  title: 'Le Bar | Tito Mojito',
  meta: [
    { name: 'description', content: 'Découvrez l’univers de Tito Mojito à Toulouse : un bar à cocktails unique, une équipe passionnée et une ambiance festive au cœur de la ville.' },
    { property: 'og:title', content: 'Le Bar | Tito Mojito' },
    { property: 'og:description', content: 'Un bar à cocktails unique à Toulouse. Tito Mojito, c’est une équipe passionnée et une ambiance chaleureuse.' },
    { property: 'og:url', content: 'https://www.titomojito.fr/le-bar' },
    { property: 'og:image', content: 'https://www.titomojito.fr/images/og-bar.jpg' }
  ],
  link: [{ rel: 'canonical', href: 'https://www.titomojito.fr/le-bar' }]
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