<script setup lang="ts">
import {onMounted} from "vue"

const config = useRuntimeConfig()
const founders = ref(null)

async function loadFounders() {
  try {
    const url = `${config.public.apiUrl}/157`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }
    const data = await response.json();
    founders.value = data.acf_fields.membre_du_staff;
    console.log(data)
    console.log(founders)
  } catch (error) {
    console.error("Erreur lors de la requête fetch:", error)
  }
}

onMounted(
  loadFounders
)
</script>

<template>
  <section class="wrapper">
    <h2 class="h2">Les créateurs</h2>
    <div class="container">
      <ul class="cards">
        <li v-for="(founder, index) in founders" :key="founder.nom" class="card" :style="{ paddingTop: (index * 60) + 'px' }">
          <div class="card-body">
            <h4 class="h4">{{ founder.nom }}</h4>
            <p>{{ founder.description }}</p>
            <h4 class="h4">{{ founder.poste }}</h4>
            <img :src="founder.photo_du_membre.url" :alt="`Photo de ${founder.nom}`">
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>



<style scoped>
li {
  list-style: none;
  position: sticky;
  top: 0;
}
.wrapper {
  margin-top: 30px;
}
.h2 {
  grid-column: 1 / 13;
}
.container {
  grid-column: 1 / 13;
}
.card-body {
  border-top: 1px solid #2B2B2B;
  padding-top: 30px;
  background-color: #F9F6ED;
  transition: all 0.5s;
}
.cards {
  display: grid;
  grid-template-rows: repeat(3, 100vh);
}




img {
  width: 360px;
  height: 500px;
  border-radius: 20px;
  object-fit: cover;
}
</style>