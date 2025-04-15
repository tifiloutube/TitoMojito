<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Header from "~/components/cartePage/Nourritures/Header.vue";
import Carte from "~/components/cartePage/Nourritures/Carte.vue";
import CarteMobile from "~/components/cartePage/Nourritures/CarteMobile.vue";

useHead({
  title: 'Carte Nourriture | Tito Mojito',
  meta: [
    { name: 'description', content: 'Tapas, planches… Découvrez notre carte salée pour accompagner vos cocktails.' },
    { property: 'og:title', content: 'Carte Nourriture | Tito Mojito' },
    { property: 'og:description', content: 'Découvrez tous nos plats à partager ou à savourer en solo, à Toulouse chez Tito Mojito.' },
    { property: 'og:url', content: 'https://titomojito.fr/carte/nourriture' },
    { property: 'og:image', content: 'https://titomojito.fr/images/og-nourriture.jpg' }
  ],
  link: [{ rel: 'canonical', href: 'https://titomojito.fr/carte/nourriture' }]
})

// Créer une référence pour la largeur de la fenêtre
const isDesktop = ref(false);

function handleResize() {
  isDesktop.value = window.innerWidth > 900;
}

onMounted(() => {
  // Exécuter uniquement côté client
  if (typeof window !== 'undefined') {
    // Initialiser la valeur de isDesktop
    handleResize();

    // Ajouter l'écouteur d'événement
    window.addEventListener('resize', handleResize);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize);
  }
});
</script>

<template>
  <Header />
  <Carte v-if="isDesktop" />
  <CarteMobile v-else />
</template>

<style scoped>

</style>