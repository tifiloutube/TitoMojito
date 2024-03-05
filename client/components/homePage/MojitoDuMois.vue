<script setup lang="js">
import {onMounted} from 'vue';

const config = useRuntimeConfig()
const mojitoDuMois = ref(null);

async function loadMojitoDuMois() {
  try {
    const url = `${config.public.apiUrl}/118`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }
    const data = await response.json();
    mojitoDuMois.value = data.acf_fields.mojito_du_mois;
  } catch (error) {
    console.error('Erreur lors de la requête fetch:', error);
  }
}

const dynamicStyles = computed(() => {
  if (!mojitoDuMois.value) return {};

  const couleur = mojitoDuMois.value.couleur;
  return {
    boxShadow: `0px 0px 50px 0px ${couleur} inset, 0px 0px 50px 0px ${couleur}`,
    textShadow: `0px 0px 50px ${couleur}`,
  };
});
onMounted(
    loadMojitoDuMois
);
</script>

<template>
  <section class="wrapper">
    <h2 class="h2">La saveur du mois</h2>
    <div v-if="mojitoDuMois" class="mojitoDuMois">
      <img src="../../public/images/backgrounds/mojitoDuMois.png" alt="" class="imageMojitoDuMois" :style="dynamicStyles">
      <h3 class="titreMojitoDuMois" :style="{ ...dynamicStyles }">{{ mojitoDuMois.saveur_du_mojito }}</h3>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  margin-top: 143px;
  gap: 60px;
  height: 100vh;
}

.h2 {
  grid-column-start: 1;
  grid-column-end: 13;
}

.mojitoDuMois {
  display: flex;
  grid-column-start: 1;
  grid-column-end: 13;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.imageMojitoDuMois {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(5px);
  border-radius: 20px;
}

.titreMojitoDuMois {
  position: absolute;
  color: #F1ECE8;
  text-align: center;
  font-family: "Mr Dafoe", sans-serif;
  font-size: 150px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  box-shadow: none !important;
}
</style>e