<script setup lang="ts">

import NomBarFlottant from "~/components/homePage/NomBarFlottant.vue";
import SloganVideoPresentation from "~/components/homePage/SloganVideoPresentation.vue";
import MojitoDuMois from "~/components/homePage/MojitoDuMois.vue";
import ApercuCarteBoissonNourriture from "~/components/homePage/ApercuCarteBoissonNourriture.vue";
import ReseauxSociauxHoraires from "~/components/homePage/ReseauxSociauxHoraires.vue";
import ContactChatRedirection from "~/components/homePage/ContactChatRedirection.vue";
import Gallery from "~/components/LeBarPage/Gallery.vue";

useHead({
  title: 'Tito Mojito | Bar à mojito à Toulouse',
  meta: [
    {
      name: 'description',
      content: 'Venez découvrir Tito Mojito à Toulouse : bar à cocktails spécialisé dans les mojitos fruités et ambiance tropicale en plein centre-ville.'
    },
    { name: 'author', content: 'Tito Mojito' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:title', content: 'Tito Mojito | Bar à cocktails à Toulouse' },
    { property: 'og:description', content: 'Mojitos artisanaux et ambiance unique au cœur de Toulouse.' },
    { property: 'og:image', content: 'https://www.titomojito.fr/images/og-image.jpg' },
    { property: 'og:url', content: 'https://www.titomojito.fr' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Tito Mojito | Bar à cocktails à Toulouse' },
    { name: 'twitter:description', content: 'Mojitos artisanaux et ambiance unique au cœur de Toulouse.' },
    { name: 'twitter:image', content: 'https://www.titomojito.fr/images/og-image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.titomojito.fr' }
  ]
})
</script>

<template>
  <NomBarFlottant />
  <SloganVideoPresentation />
  <MojitoDuMois />
  <ApercuCarteBoissonNourriture />
  <ReseauxSociauxHoraires />
  <ClientOnly>
    <Gallery />
  </ClientOnly>
</template>

<style scoped>

</style>