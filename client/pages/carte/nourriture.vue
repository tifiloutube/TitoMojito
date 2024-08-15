<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Header from "~/components/cartePage/Nourritures/Header.vue";
import Carte from "~/components/cartePage/Nourritures/Carte.vue";
import CarteMobile from "~/components/cartePage/Nourritures/CarteMobile.vue";

useHead({
  title: 'TitoMojito - Bar à mojitos'
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