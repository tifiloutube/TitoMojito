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
    if (data.acf_fields && data.acf_fields.images_cartes.image_carte_tapas) {
      heroHeader.value = data.acf_fields.images_cartes.image_carte_tapas.url
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
  <section>
    <article class="container">
      <img :src="heroHeader" alt="image de background représentant des tapas">
      <div class="title">
        <h1 class="h1">LA CARTE</h1>
        <h2 class="h2">Tapas</h2>
      </div>
    </article>
  </section>
</template>

<style scoped>
.container {
  width: 100vw;
  border-radius: 0 0 10px 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    border-radius: 0 0 10px 10px;
    position: relative;
  }
  .title {
    position: absolute;
    text-align: center;
  }
  .h2, .h1 {
    color: #F9F6ED;
    text-shadow: 0px 4px 50px #7ED956;
  }
  .h1 {
    font-size: clamp(70px, 6vw, 120px);
    letter-spacing: 0.05em;
  }
  .h2 {
    font-size: clamp(50px, 6vw, 100px);
  }
}
</style>