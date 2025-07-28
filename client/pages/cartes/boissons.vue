<script setup lang="ts">
import Header from "~/components/cartePage/Boissons/Header.vue";
import Carte from "~/components/cartePage/Boissons/Carte.vue";

useHead({
  title: 'Carte Boissons | Tito Mojito',
  meta: [
    { name: 'description', content: 'Mojitos fruités, cocktails signatures, softs, bières… Découvrez la carte complète de Tito Mojito.' },
    { property: 'og:title', content: 'Carte Boissons | Tito Mojito' },
    { property: 'og:description', content: 'Un large choix de boissons artisanales et cocktails maison dans un cadre tropical à Toulouse.' },
    { property: 'og:url', content: 'https://titomojito.fr/carte/boissons' },
    { property: 'og:image', content: 'https://titomojito.fr/images/og-boissons.jpg' }
  ],
  link: [{ rel: 'canonical', href: 'https://titomojito.fr/carte/boissons' }]
})
</script>

<template>
  <Header />
  <Carte />
</template>

<style scoped>

</style>