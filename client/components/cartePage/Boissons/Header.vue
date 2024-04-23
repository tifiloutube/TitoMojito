<script setup lang="ts">

</script>

<template>
  <section>
    <article class="container">
      <img src="/images/carte/backgroundContact.webp" alt="image de background représentant des tapas">
      <div class="title">
        <h1 class="h1">LA CARTE</h1>
        <h2 class="h2">Boissons</h2>
      </div>
    </article>
  </section>
</template>

<style scoped>
.container {
  width: 100vw;
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    border-radius: 0 0 10px 10px;
    position: relative;
  }
  .title {
    position: absolute;
    text-align: center;
  }
  .h2, .h1 {
    color: #F9F6ED;
    text-shadow: 0px 4px 50px #7ED956;
  }
  .h1 {
    font-size: clamp(70px, 6vw, 120px);
    letter-spacing: 0.05em;
  }
  .h2 {
    font-size: clamp(50px, 6vw, 100px);
  }
}
</style>