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
        <li v-for="(founder, index) in founders" :key="founder.nom" class="card" :style="{ paddingTop: (index * 80) + 'px' }">
          <div class="card-body">
            <div class="founder" :style="{height: 'calc(80vh - ' + (index * 80) + 'px)'}">
              <div class="founder-info">
                <h4 class="h4">{{ founder.nom }}</h4>
                <p>{{ founder.description }}</p>
                <h4 class="h4">{{ founder.poste }}</h4>
              </div>
              <img :src="founder.photo_du_membre.url" :alt="`Photo de ${founder.nom}`">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>



<style scoped>
.wrapper {
  margin-top: 30px;
}
.h2 {
  grid-column: 1 / 13;
  color: #2B2B2B;
  font-size: clamp(70px , 8vw , 120px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.container {
  grid-column: 1 / 13;
}
.card {
  list-style: none;
  position: sticky;
  top: 0;
}
.card-body {
  border-top: 1px solid #2B2B2B;
  padding-top: 30px;
  background-color: #F9F6ED;
  transition: all 0.5s;
}
.cards {
  display: grid;
}

.founder {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.founder-info {
  grid-column: 1/8;
  display: flex;
  flex-direction: column;
  gap: 30px;
  p {
    max-width: 450px;
  }
}

img {
  width: 100%;
  height: auto;
  max-height: 600px;
  border-radius: 20px;
  object-fit: cover;
  grid-column: 10/13;
}

.h4 {
  font-size: 50px;
}
@media screen and (max-width: 900px) {
  .founder-info {
    grid-column: 1/7;
  }
  img {
    grid-column: 7/13;
  }
}
</style>