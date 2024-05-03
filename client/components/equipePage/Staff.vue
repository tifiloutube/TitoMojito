<script setup lang="ts">
import { onMounted, ref } from 'vue'

const staff = ref(null)

async function loadMemberStaff() {
  try {
    const config = useRuntimeConfig()
    const url = `${config.public.apiUrl}/199`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données')
    }

    const data = await response.json();
    staff.value = data.acf_fields.equipe;
  } catch (error) {
    console.error("Erreur lors de la requête fetch:", error);
  }
}

onMounted(loadMemberStaff);
</script>


<template>
  <section class="wrapper">
    <div class="container" v-for="(etablissement, indexEtablissement) in staff" :key="indexEtablissement">
      <h2 class="h2 etablissement">{{ etablissement.etablissement }}</h2>
      <ul class="cards">
        <li v-for="(membre, indexMembre) in etablissement.membre_du_staff" :key="indexMembre" class="card" :style="{ paddingTop: ((indexMembre % 4) * 80) + 'px' }">
        <div class="card-body">
            <div class="member" :style="{height: 'calc(100vh - ' + ((indexMembre % 4)* 80) + 'px)'}">
              <div class="member-info">
                <h4 class="h4">{{ membre.nom }}</h4>
                <p>{{ membre.description }}</p>
                <h4 class="h4">{{ membre.poste }}</h4>
              </div>
              <img v-if="membre.photo_du_membre" :src="membre.photo_du_membre.url" :alt="`Photo de ${membre.nom}`" class="member-photo">
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
}
.container {
  grid-column: 1 / 13;
}
.etablissement {
  margin-top: 80px;
  margin-bottom: 80px;
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

.member {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.member-info {
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
  border-radius: 10px;
  object-fit: cover;
  grid-column: 10/13;
}
.h4 {
  font-size: 50px;
}
@media screen and (max-width: 900px) {
  .member-info {
    grid-column: 1/7;
  }
  img {
    grid-column: 7/13;
  }
}
</style>