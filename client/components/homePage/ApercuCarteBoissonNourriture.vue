<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Carte {
  type: string;
  nom: string;
  image: string;
  route: string;
}

const cartes = ref<Carte[]>([])

const fetchCartes = async () => {
  try {
    const response = await fetch('https://api.titomojito.fr/wp-json/wp/v2/posts/383')
    const data = await response.json()

    if (data.acf_fields && data.acf_fields.images_cartes) {
      cartes.value = [
        {
          type: 'nourriture',
          nom: 'On grignote quoi ?',
          image: data.acf_fields.images_cartes.image_carte_tapas.url,
          route: '/carte/nourriture'
        },
        {
          type: 'boissons',
          nom: 'On mojite quoi ?',
          image: data.acf_fields.images_cartes.image_carte_boissons.url,
          route: '/carte/boissons'
        }
      ]
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
  }
}

// Appeler la fonction lorsque le composant est monté
onMounted(() => {
  fetchCartes()
})
</script>

<template>
  <section class="wrapper">
    <h3 class="h3">Notre carte</h3>
    <article class="container" v-for="carte in cartes" :key="carte.type">
      <NuxtLink :to="carte.route" style="position: relative; width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;">
        <img :src="carte.image" :alt="`image carte ${carte.type}`">
        <button class="container-name button">
          {{ carte.nom }}
        </button>
      </NuxtLink>
    </article>
  </section>
</template>


<style scoped>
.wrapper {
  margin-bottom: 140px;
}
.wrapper .container:nth-child(2) {
  grid-column: 1/7;
}
.wrapper .container:nth-child(3) {
  grid-column: 7/13;
}
.h3 {
  margin-top: 50px;
  grid-column: 1/13;
  text-align: center;
  color: #2B2B2B;
  font-size: clamp(35px, 8vw, 80px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.container-name {
  position: absolute;
  transition: box-shadow 0.3s, transform 0.3s;
}
.button {
  font-size: 45px;
}
img {
  width: 100%;
  height: 500px;
  border-radius: 10px;
  object-fit: cover;
  transition: filter 0.3s;
  filter: blur(2px);
}

.container:hover img {
  filter: blur(0px);
}

.container:hover .container-name {
  box-shadow: 5px 4px 0px 0px #7ED956;
  transform: translate(-4px, -4px);
}

button {
  border: none;
}
@media  screen and (max-width: 900px)  {
  .wrapper {
    margin-bottom: 0;
  }
  .wrapper .container:nth-child(2),
  .wrapper .container:nth-child(3) {
    grid-column: 1/13;
    img {
      height: 300px;
    }
  }
  .button {
    font-size: 25px;
  }
}
</style>