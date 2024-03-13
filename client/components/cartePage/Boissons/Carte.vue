<script setup lang="ts">
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

    console.log(data);
    console.log(carteBoisson.value);
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
          <svg :class="{ 'is-rotated': openStates[index] }" width="54" height="54" viewBox="0 0 54 54">
              <rect x="54" y="54" width="54" height="54" transform="rotate(-180 54 54)" fill="url(#pattern0)"/>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_295_1130" transform="scale(0.00195312)"/>
                </pattern>
                <image id="image0_295_1130" width="512" height="512" xlink:href="data:image/png;base64,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"/>
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
        font-size: 17px;
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
</style>