<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Création d'une variable réactive pour stocker l'URL de l'image
const heroHeader = ref('')

// Fonction pour appeler l'API et récupérer l'image
const fetchHeroHeader = async () => {
  try {
    const response = await fetch('https://api.titomojito.fr/wp-json/wp/v2/posts/383')
    const data = await response.json()

    // Vérifier si l'image existe et récupérer son URL
    if (data.acf_fields && data.acf_fields.image_lequipe) {
      heroHeader.value = data.acf_fields.image_lequipe.url
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
  }
}

// Appeler la fonction lorsque le composant est monté
onMounted(() => {
  fetchHeroHeader()
})
</script>

<template>
  <section class="container">
    <div class="containerTitle">
      <img :src="heroHeader" alt="staff du bar" class="backgroundImage">
      <h1 class="h1">LE STAFF</h1>
    </div>
  </section>
</template>

<style scoped>
.container {
  border-radius: 0 0 10px 10px;
}
.h1 {
  font-size: clamp(80px ,8vw,150px);
  letter-spacing: 0.08em;
  text-shadow: 0px 4px 50px var(--tertiary-color);
}
.containerTitle {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 0 0 10px 10px;
  }
}
.backgroundImage {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
}
.h1 {
  position: absolute;
  text-align: center;
  color: #F1ECE8;
}
</style>