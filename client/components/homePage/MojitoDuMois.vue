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
    <article class="mojitoDuMois">
      <div v-for="(mojito, index) in mojitosDuMois" :key="index" class="saveurMojito" :style="{ backgroundImage: `url(${mojito.imageBackground})`, background: `linear-gradient(180deg, #F9F6ED 0%, ${mojito.couleurGradient} 33%, ${mojito.couleurGradient} 100%)` }">
        <div class="info">
          <h2 class="h2">{{ mojito.lieu }}</h2>
          <h3 class="localisation">La saveurs du mois</h3>
          <h2 class="saveur" :style="{ backgroundImage: `url(${mojito.imageBackground})` }">{{ mojito.saveur }}</h2>
        </div>
        <img :src="mojito.imageMojito" alt="Image de Mojito">
      </div>
    </article>
  </section>
</template>

<style scoped>
.container {
  margin-top: 80px;
  gap: 60px;
}
.mojitoDuMois {
  display: flex;
  flex-direction: column;
  gap: 300px;
  .saveurMojito {
    padding-top: 20px;
    border-radius: 20px 20px 0px 0px;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }
  img {
    position: absolute;
    z-index: -1;
    bottom: 0;
    max-width: 500px;
  }
}

.h2 {
  text-align: center;
  color: #2B2B2B;
  font-size: clamp(30px, 10vw, 80px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.saveur {
  width: 100%;
  letter-spacing: -20px;
  color: transparent;
  text-align: center;
  font-family: "Lexend Tera", sans-serif;
  font-size: clamp(60px, 15vw, 180px);
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  background-size: cover;
  background-position: center;
  background-clip: text;
  --webkit-background-clip: text;
}
.localisation {
  color: #2b2b2b;
  text-align: center;
  font-size: clamp(20px, 3vw, 35px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

@media  screen and (max-width: 900px) {
  .saveur {
    margin-bottom: -50px;
  }
  .mojitoDuMois {
    gap: 0px;
  }
  .info {
    margin-top: 65px;
  }
}

@media  screen and (max-width: 500px) {
  img {
    display: none;
  }
  .info {
    margin: auto;
  }
}
</style>