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
    if (data.acf_fields && data.acf_fields.image_le_bar) {
      heroHeader.value = data.acf_fields.image_le_bar.url
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
      <div class="containerTitle">
        <img :src="heroHeader" alt="background bar" class="backgroundImage">
        <h1 class="h1">LE BAR</h1>
      </div>
      <aside>
        <div class="info">
          <p>2</p>
          <p>Le nombre de bars</p>
        </div>
        <div class="info mojito">
          <p>3.90€</p>
          <p>Le prix du mojito*</p>
          <p>*virgin</p>
        </div>
        <div class="info">
          <p>1</p>
          <p>Ambiance magique</p>
        </div>
      </aside>
    </article>
  </section>
</template>

<style scoped>
.h1 {
  font-size: clamp(80px ,8vw,150px);
  letter-spacing: 0.08em;
  text-shadow: 0px 4px 50px var(--tertiary-color);
}
.container {
  background-color: #2b2b2b;
  border-radius: 0 0 10px 10px;
}
.containerTitle {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.backgroundImage {
  width: 100%;
  height: 100vh;
  border-radius: 0 0 10px 10px;
  object-fit: cover;
}
.h1 {
  position: absolute;
  text-align: center;
  color: #F1ECE8;
}
aside {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  min-height: 30vh;
}
.info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.info p:nth-child(1) {
  color: #f9f6ed;
  font-family: "Bradley Hand", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.info p:nth-child(2) {
  color: #f9f6ed;
  font-family: "Bradley Hand", sans-serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.info p:nth-child(3) {
  color: #f9f6ed;
  font-family: "Bradley Hand", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.mojito {
  padding-top: 18px;
}

@media screen and (max-width: 900px) {
  aside {
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .info p {
    font-size: 20px !important;
  }
  .mojito p:nth-child(3) {
    color: #f9f6ed;
    font-family: "Bradley Hand", sans-serif;
    font-size: 13px !important;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }
  .mojito {
    padding-top: 0;
  }
}
</style>