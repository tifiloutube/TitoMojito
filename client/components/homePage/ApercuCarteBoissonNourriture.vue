<script setup lang="ts">
const cartes = [
  { type: 'nourriture', nom: 'On grignote quoi ?', image: '/images/carte/carteNourriture.jpeg', route: '/carte/nourriture' },
  { type: 'boissons', nom: 'On mijote quoi ?', image: '/images/carte/carteBoissons.jpg', route: '/carte/boissons' },
];
</script>

<template>
  <section class="wrapper">
    <h3 class="h3">Notre carte</h3>
    <article class="container" v-for="carte in cartes" :key="carte.type">
      <NuxtLink :to="carte.route" style="position: relative; width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;">
        <img :src="carte.image" :alt="`image carte ${carte.type}`">
        <div class="container-name">
          <h3 class="h3">{{ carte.nom }}</h3>
        </div>
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
  grid-column: 1/13;
  text-align: center;
  color: #2B2B2B;
  font-family: "Mr Dafoe", sans-serif;
  font-size: 120px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.container-name {
  position: absolute;
  border-radius: 8px;
  background: #7ED956;
  padding: 5px 20px 5px 20px;
  min-width: 255px;
  transition: box-shadow 0.3s, transform 0.3s;
  .h3 {
    color: #2B2B2B;
    text-align: center;
    font-family: "Mr Dafoe", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
img {
  width: 100%;
  height: 500px;
  border-radius: 20px;
  object-fit: cover;
  transition: filter 0.3s;
  filter: blur(5px);
}

.container:hover img {
  filter: blur(0px);
}

.container:hover .container-name {
  box-shadow: 5px 4px 0px 0px #2B2B2B;
  transform: translate(-4px, -4px);
}
</style>