<script setup lang="js">
import { onMounted, ref } from 'vue';

const carteBoisson = ref([]);
const openStates = reactive({});

async function loadCarteBoisson() {
  try {
    const config = useRuntimeConfig();
    const url = `${config.public.apiUrl}/116`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();
    carteBoisson.value = data.acf_fields.carte_boisson;

  } catch (error) {
    console.error("Erreur lors de la requête fetch:", error);
  }
}

function toggle(index) {
  openStates[index] = !openStates[index];
}

onMounted(loadCarteBoisson);
</script>

<template>
  <section>
    <article class="wrapper">
      <ul class="list-boissons" v-for="(categorie, index) in carteBoisson" :key="index">
        <div class="list-boissons_title" @click="toggle(index)">
          <h2 class="h2">{{ categorie.boissons.categorie_de_la_boisson }}</h2>
          <svg :class="{ 'is-rotated': openStates[index] }" width="40" height="40" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <li v-show="openStates[index]" v-for="(boisson, indexB) in categorie.boissons.la_boisson" :key="'boisson-' + indexB" class="list-boissons_nom_prix">
          <ol>{{ boisson.nom_de_la_boisson }}</ol>
          <ol>{{ boisson.prix_de_la_boisson }}</ol>
        </li>
      </ul>
    </article>
  </section>
</template>


<style scoped>
section{
  margin-top: 80px;
  margin-bottom: 140px;
}
li {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.wrapper {
  .list-boissons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .list-boissons_title {
      display: flex;
      justify-content: space-between;
    }
    .list-boissons_nom_prix {
      ol {
        font-family: "Bradley Hand", sans-serif;
        font-size: 28px;
      }
    }
  }
  .list-boissons:nth-child(odd) {
    grid-column: 1/6;
  }
  .list-boissons:nth-child(even) {
    grid-column: 8/13;
  }
}
.is-rotated {
  transform: rotate(180deg);
}

.list-boissons_nom_prix {
  transition: all 0.5s ease;
}

.list-boissons_title svg {
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

.list-boissons_nom_prix {
  animation: slideDown 0.5s ease forwards;
}

@media screen and (max-width: 900px) {
  .wrapper {
    gap: 20px;
    .h2 {
      margin-top: auto;
      margin-bottom: auto;
    }
    ul {
      grid-column: 1/13 !important;
    }
  }
}
</style>