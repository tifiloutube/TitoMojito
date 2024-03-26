<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRuntimeConfig } from '#imports'

const mojitosDuMois = ref([])

async function loadMojitosDuMois() {
  try {
    const config = useRuntimeConfig()
    const url = `${config.public.apiUrl}/118`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();

    if(data.acf_fields && data.acf_fields.mojitos_du_mois) {
      mojitosDuMois.value = data.acf_fields.mojitos_du_mois.map(mojito => {
        return {
          saveur: mojito.mojito_du_mois.saveur_du_mois,
          imageBackground: mojito.mojito_du_mois.image_background_saveur_du_mois.url,
          couleurGradient: mojito.mojito_du_mois.couleur_du_mojito_du_mois_pour_le_degrade,
          imageMojito: mojito.mojito_du_mois.image_du_mojito_du_mois.url,
          lieu: mojito.mojito_du_mois.etablissement
        };
      });
    }

    console.log(data);
    console.log(mojitosDuMois.value);
  } catch (error) {
    console.error("Erreur lors de la requête fetch:", error);
  }
}

onMounted(
    loadMojitosDuMois
);
</script>

<template>
  <section class="container">
    <h2 class="h2">Les saveurs du mois</h2>
    <article class="mojitoDuMois">
      <div v-for="(mojito, index) in mojitosDuMois" :key="index" class="saveurMojito" :style="{ backgroundImage: `url(${mojito.imageBackground})`, background: `linear-gradient(180deg, #F9F6ED 0%, ${mojito.couleurGradient} 33%, ${mojito.couleurGradient} 100%)` }">
        <h2 class="saveur" :style="{ backgroundImage: `url(${mojito.imageBackground})` }">{{ mojito.saveur }}</h2>
        <img :src="mojito.imageMojito" alt="Image de Mojito">
        <h3 class="localisation">{{ mojito.lieu }}</h3>
      </div>
    </article>
  </section>
</template>

<style scoped>
.container {
  margin-top: 80px;
  gap: 60px;
}

.h2 {
  text-align: center;
  margin-bottom: 45px;
  margin-left: 50px;
  color: #2B2B2B;
  font-family: "Mr Dafoe", sans-serif;
  font-size: 120px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.mojitoDuMois {
  .saveurMojito {
    border-radius: 20px 20px 0px 0px;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
}
.saveur {
  letter-spacing: -0.08em;
  color: transparent;
  text-align: center;
  font-family: "Lexend Tera", sans-serif;
  font-size: 180px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-size: cover;
  background-position: center;
  background-clip: text;
  --webkit-background-clip: text;
  margin-bottom: -180px;
}
.localisation {
  color: #F9F6ED;
  text-align: center;
  font-family: "Mr Dafoe", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>