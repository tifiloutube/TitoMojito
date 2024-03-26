<script setup lang="ts">

</script>

<template>
  <section>
    <article class="container">
      <img src="/images/carte/carteNourriture.jpeg" alt="image de background représentant des tapas">
      <div class="title">
        <h1 class="h1">LA CARTE</h1>
        <h2 class="h2">Nourritures</h2>
      </div>
    </article>
  </section>
</template>

<style scoped>
.container {
  width: 100vw;
  background-color: #7ED956;
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    border-radius: 20px;
    filter: blur(7.5px);
    position: relative;
  }
  .title {
    position: absolute;
    text-align: center;
  }
  .h2, .h1 {
    font-family: "Mr Dafoe", sans-serif;
    color: #F9F6ED;
  }
  .h1 {
    font-size: 120px;
    letter-spacing: 0.05em;
  }
  .h2 {
    font-size: 100px;
  }
}
</style>