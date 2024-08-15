<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

const isOpen = ref(false);
const route = useRoute(); // Utilise le hook useRoute pour accéder à l'objet route actuelle

function toggleMenu() {
  isOpen.value = !isOpen.value; // Bascule l'état ouvert/fermé du menu
}

// Regarde l'objet route pour détecter les changements
watch(route, () => {
  if (isOpen.value) {
    isOpen.value = false; // Ferme le menu si la route change et que le menu est ouvert
  }
});

// Computed property pour définir la classe active basée sur la route actuelle
const activeLinkClass = computed(() => {
  return {
    '/': route.path === '/' ? 'active-link' : '',
    '/le-bar': route.path === '/le-bar' ? 'active-link' : '',
    '/equipe': route.path === '/equipe' ? 'active-link' : '',
    '/carte': (route.path === '/carte' || route.path.startsWith('/carte/')) ? 'active-link' : '',
    '/carte/nourriture': route.path === '/carte/nourriture' ? 'active-link' : '',
    '/carte/boissons': route.path === '/carte/boissons' ? 'active-link' : ''
  };
});
</script>

<template>
  <nav :class="{ 'open': isOpen }" class="menuDesktop">
    <p @click="toggleMenu" :class="{ 'align-end': isOpen }">{{ isOpen ? 'fermer' : 'menu' }}</p>
    <ul v-show="isOpen">
      <li :class="activeLinkClass['/']">
        <NuxtLink to="/" @click="toggleMenu">Accueil</NuxtLink>
      </li>
      <li :class="activeLinkClass['/le-bar']">
        <NuxtLink to="/le-bar" @click="toggleMenu">Le Bar</NuxtLink>
      </li>
      <li :class="activeLinkClass['/equipe']">
        <NuxtLink to="/equipe" @click="toggleMenu">L'équipe</NuxtLink>
      </li>
      <li :class="activeLinkClass['/carte']">
        <NuxtLink to="/carte" @click="toggleMenu">Les cartes</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 10px;
  right: 10px;
  background: #f9f6ed;
  border-radius: 5px;
  border: 1px dashed #2b2b2b;
  width: 140px;  /* Taille initiale */
  height: 45px; /* Taille initiale */
  transition: width 0.5s ease, height 0.5s ease; /* Transitions synchronisées sans délai */
  overflow: hidden; /* Cache les débordements pendant l'animation */
  z-index: 1000;
}

.open {
  width: 400px; /* Largeur finale lorsque le menu est ouvert */
  height: 400px; /* Hauteur finale lorsque le menu est ouvert */
}

p {
  text-align: center; /* Texte centré par défaut */
  padding: 10px 30px;
  cursor: pointer; /* Style pour indiquer que l'élément est cliquable */
  transition: color 0.3s ease, text-align 0.3s ease; /* Transition pour la couleur du texte et l'alignement */
}

.align-end {
  text-align: end; /* Aligne le texte à droite */
}

ul {
  list-style: none; /* Enlève les puces des listes */
  padding: 0;
  transition: opacity 0.5s ease-in-out; /* Transition pour l'apparition de la liste */
}

ul li {
  padding: 20px; /* Ajoute du padding pour chaque élément de la liste */
  font-size: 30px;
  transition: background-color 0.3s ease; /* Ajoute une transition pour l'effet de survol */
}

li a:hover {
  color: #7ed956; /* Couleur de fond lors du survol */
}

.active-link a {
  color: #7ed956; /* Couleur pour l'élément actif */
}

@media screen and (max-width: 900px) {
  .open {
    width: calc(100vw - 20px);
  }
}
</style>