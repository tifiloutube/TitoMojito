<script setup lang="js">
import {onMounted} from 'vue';

const config = useRuntimeConfig()
const mojitoDuMois = ref(null);

async function loadMojitoDuMois() {
  try {
    const url = `${config.public.apiUrl}/118`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }
    const data = await response.json();
    mojitoDuMois.value = data.acf_fields.mojito_du_mois;
  } catch (error) {
    console.error('Erreur lors de la requête fetch:', error);
  }
}

const dynamicStyles = computed(() => {
  if (!mojitoDuMois.value) return {};

  const couleur = mojitoDuMois.value.couleur;
  return {
    boxShadow: `0px 0px 50px 0px ${couleur} inset, 0px 0px 50px 0px ${couleur}`,
    textShadow: `0px 0px 50px ${couleur}`,
  };
});
onMounted(
    loadMojitoDuMois
);
</script>

<template>
  <section class="container">
    <h2 class="h2">Les saveurs du mois</h2>
    <article class="mojitoDuMois">
      <div class="saveur1">
        <h2 class="saveur">MANGUE</h2>
        <img src="../../public/images/orange-cocktail-with-ice-table-removebg-preview.png">
        <h3 class="localisation">TitoMojito Jeanne D'arc</h3>
      </div>
      <div class="saveur2">
        <h2 class="saveur-titre">ANANAS</h2>
        <img src="../../public/images/orange-cocktail-with-ice-table-removebg-preview.png">
        <h3 class="localisation">TitoMojito Jean Jaurès</h3>
      </div>
    </article>
  </section>
</template>

<style scoped>
.container {
  margin-top: 80px;
  gap: 60px;
}

.h2 {
  text-align: center;
  margin-bottom: 45px;
  margin-left: 50px;
  color: #2B2B2B;
  font-family: "Mr Dafoe", sans-serif;
  font-size: 120px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.mojitoDuMois {
  .saveur1 {
    border-radius: 20px 20px 0px 0px;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, #F9F6ED 0%, #954F00 33%, #954F00 100%);
  }
  .saveur2 {
    border-radius: 20px 20px 0px 0px;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, #F9F6ED 0%, #ffcb00 33%, #ffcb00 100%);
  }
}
.saveur {
  letter-spacing: -0.08em;
  color: transparent;
  text-align: center;
  font-family: "Lexend Tera", sans-serif;
  font-size: 180px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-image: url("https://images.unsplash.com/photo-1605027990121-cbae9e0642df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  background-clip: text;
  --webkit-background-clip: text;
  margin-bottom: -180px;
}
.saveur-titre {
  letter-spacing: -0.08em;
  color: transparent;
  text-align: center;
  font-family: "Lexend Tera", sans-serif;
  font-size: 180px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-image: url("https://images.unsplash.com/photo-1550828484-55f0abc43e03?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  background-clip: text;
  --webkit-background-clip: text;
  margin-bottom: -180px;
}
.localisation {
  color: #FFF;
  text-align: center;
  font-family: "Lexend Tera", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>e