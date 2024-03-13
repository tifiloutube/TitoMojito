<script setup lang="ts">

</script>

<template>
  <section class="container">
    <h2 class="h2">Des mojitos à petits prix pour toute la vie</h2>
    <article>
      <video src="/videos/videoTitoMojito.webm" autoplay loop muted playsinline></video>
      <div class="container-video">
        <p>Bienvenue chez <span>titomojito</span>, votre destination incontournable à Toulouse pour un art de <span>"mojiter"</span> unique à 3.90€!</p>
        <button class="button">
          Nous découvrir
        </button>
      </div>
    </article>
  </section>
</template>

<style scoped>
.container {
  margin-top: 500px;
}
.h2 {
  text-align: center;
  color: #2B2B2B;
  font-family: "Mr Dafoe", sans-serif;
  font-size: 100px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
article {
  position: relative;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
}
video {
  object-fit: cover;
  height: 555px;
  min-width: 100%;
  filter: blur(7px);
  border-radius: 20px;
}
.container-video {
  z-index: 1;
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 18px;
}
p {
  width: 720px;
  color: #F1ECE8;
  text-align: center;
  font-family: "Lexend Tera", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
span {
  color: #7ED956;
}
.button {
  background: #7ED956;
  border-radius: 8px;
  border: none;
  color: #2B2B2B;
  font-family: "Lexend Tera", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 22px 36px;
  margin: auto;
}
</style>