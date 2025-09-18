<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRuntimeConfig } from '#imports'

const mojitosDuMois = ref<any[]>([])

async function loadMojitosDuMois() {
  try {
    const config = useRuntimeConfig()
    const url = `${config.public.apiUrl}/118`

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }

    const data = await response.json()

    if (data.acf_fields && data.acf_fields.mojitos_du_mois) {
      mojitosDuMois.value = data.acf_fields.mojitos_du_mois.map((mojito: any) => {
        return {
          saveur: mojito.mojito_du_mois.saveur_du_mois,
          imageBackground: mojito.mojito_du_mois.image_background_saveur_du_mois?.url || null,
          couleurGradient: mojito.mojito_du_mois.couleur_du_mojito_du_mois_pour_le_degrade,
          imageMojito: mojito.mojito_du_mois.image_du_mojito_du_mois?.url || null,
          lieu: mojito.mojito_du_mois.etablissement,
        }
      })
    }
  } catch (error) {
    console.error('Erreur lors de la requête fetch:', error)
  }
}

onMounted(loadMojitosDuMois)
</script>

<template>
  <section class="container">
    <article class="mojitoDuMois">
      <div
          v-for="(mojito, index) in mojitosDuMois"
          :key="index"
          class="saveurMojito"
          :style="{
          backgroundImage: mojito.imageBackground ? `url(${mojito.imageBackground})` : 'none',
          background: `linear-gradient(180deg, var(--color-secondary) 0%, ${mojito.couleurGradient} 33%, ${mojito.couleurGradient} 100%)`,
        }"
      >
        <!-- ✅ classe conditionnelle -->
        <div class="info" :class="{ noImage: !mojito.imageMojito }">
          <h2 class="h2">{{ mojito.lieu }}</h2>
          <h3 class="localisation" v-if="mojito.imageMojito">La saveurs du mois</h3>
          <h2
              class="saveur"
              v-if="mojito.imageBackground"
              :style="{ backgroundImage: `url(${mojito.imageBackground})` }"
          >
            {{ mojito.saveur }}
          </h2>
          <h2 v-else class="saveur">{{ mojito.saveur }}</h2>
        </div>

        <div class="imageContainer" v-if="mojito.imageMojito">
          <img
              :src="mojito.imageMojito"
              alt="Image de Mojito"
          />
        </div>
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
  gap: 100vh;
}

.saveurMojito {
  padding-top: 20px;
  border-radius: 20px 20px 0px 0px;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.info {
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 2;
}

/* ✅ appliqué si pas d'image */
.info.noImage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.imageContainer {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imageContainer img {
  height: 100%;
  width: 50%;
  max-width: 700px;
  object-fit: cover;
}

.h2 {
  text-align: center;
  color: var(--color-primary);
  font-size: clamp(30px, 10vw, 80px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.saveur {
  width: 100%;
  letter-spacing: -0.2em;
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
  -webkit-background-clip: text;
}

.localisation {
  color: var(--color-primary);
  text-align: center;
  font-size: clamp(20px, 3vw, 35px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

@media screen and (max-width: 900px) {
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

@media screen and (max-width: 500px) {
  img {
    display: none;
  }
  .info {
    margin-top: 30vh;
  }
  .saveur {
    color: var(--color-primary);
  }
}
</style>