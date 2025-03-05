<script setup lang="js">
import { onMounted, ref, reactive } from 'vue';

const carteNourriture = ref([]);
const openStates = reactive({});
const imageVisibility = reactive({});

async function loadCarteNourriture() {
  try {
    const config = useRuntimeConfig();
    const url = `${config.public.apiUrl}/88`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();
    carteNourriture.value = data.acf_fields.carte_nourriture;
    // Initialisation de imageVisibility pour toutes les nourritures
    carteNourriture.value.forEach((categorie, index) => {
      categorie.nourritures.la_nourriture.forEach((_, indexN) => {
        imageVisibility[`${index}-${indexN}`] = false;
      });
    });
  } catch (error) {
    console.error("Erreur lors de la requête fetch:", error);
  }
}

function toggle(index) {
  openStates[index] = !openStates[index];
}

function toggleImage(index, indexN, forceClose = false) {
  const key = `${index}-${indexN}`;

  // Fermer toutes les autres images avant d'ouvrir celle-ci
  for (const k in imageVisibility) {
    if (k !== key) {
      imageVisibility[k] = false;
    }
  }

  // Basculer la visibilité de l'image cliquée
  imageVisibility[key] = !imageVisibility[key];
}

onMounted(() => {
  loadCarteNourriture();
});
</script>


<template>
  <section>
    <article class="wrapper">
      <ul class="list-nourritures" v-for="(categorie, index) in carteNourriture" :key="index">
        <div class="list-nourritures_title" @click="toggle(index)">
          <h2 class="h2">{{ categorie.nourritures.categories_de_la_nourriture }}</h2>
          <svg :class="{ 'is-rotated': openStates[index] }" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1048_23)">
              <path d="M54.0001 38.935C54.0001 39.7336 53.696 40.5354 53.0827 41.1473C51.8608 42.3692 49.8833 42.3692 48.6614 41.1473L27.0003 19.4847L5.33771 41.1473C4.11578 42.3692 2.13663 42.3692 0.916447 41.1473C-0.305482 39.9253 -0.305482 37.9462 0.916447 36.7246L24.7881 12.8529C26.01 11.631 27.9891 11.631 29.2093 12.8529L53.0824 36.7246C53.6942 37.3344 54.0001 38.1347 54.0001 38.935Z" fill="#F1ECE8"/>
            </g>
            <defs>
              <clipPath id="clip0_1048_23">
                <rect width="54" height="54" fill="white" transform="matrix(0 -1 1 0 0 54)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <li v-show="openStates[index]" v-for="(nourriture, indexN) in categorie.nourritures.la_nourriture" :key="'nourriture-' + indexN" class="list-nourritures_nom_prix">
          <div class="list-nourritures_container" @click="toggleImage(index, indexN)">
            <div>
              <div>
                <ol>{{ nourriture.nom_de_la_nourriture }}</ol>
                <ol class="composition">{{ nourriture.composition_de_la_nourriture }}</ol>
              </div>
              <p class="boutonDeploiement">{{ imageVisibility[`${index}-${indexN}`] ? 'Voir moins' : 'Voir plus' }}</p>
            </div>
            <ol>{{ nourriture.prix_de_la_nourriture }}</ol>
          </div>
          <div :class="['image-container', { 'is-open': imageVisibility[`${index}-${indexN}`] }]">
            <img :src="nourriture.photo_de_la_nourriture.url" alt="Photo de la nourriture" class="imageHover"/>
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.h2 {
  display: flex;
  align-items: center;
}

.boutonDeploiement {
  font-size: 11px;
  text-decoration: underline;
}

ul {
    list-style: none;
}

.wrapper {
  margin-top: 20px;
  margin-bottom: 20px;
}

.list-nourritures {
  cursor: pointer;
  grid-column: 1/13;
  gap: 10px;
  display: grid;
}
.list-nourritures_title, .list-nourritures_container {
  display: flex;
  justify-content: space-between;
}

.is-rotated {
  transform: rotate(180deg);
}
.list-nourritures_nom_prix {
  transition: all 0.5s ease;
}
.list-nourritures_title svg {
  transition: transform 0.5s ease;
}

@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.list-nourritures_nom_prix {
  animation: slideDown 0.5s ease forwards;
}
.composition {
  color: #2B2B2B;
  font-family: "Lexend Tera", sans-serif;
  font-size: 15px !important;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.image-container {
  margin-top: 10px;
  height: 0vh;
  overflow: hidden;
  transition: height 0.5s ease;
  position: relative;
}

.image-container.is-open {
  height: 50vh;
  display: block;
}

.imageHover {
  border-radius: 20px;
  width: 100%;
  height: 90%;
  object-fit: cover;
}

.close-button {
  cursor: pointer;
  height: 30px;
  width: 30px;
  margin: auto;
}

body.modal-open {
  overflow: hidden;
}
</style>