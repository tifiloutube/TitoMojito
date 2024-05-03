<script setup lang="ts">

</script>

<template>
  <section class="container">
    <article class="wrapper">
      <h2 class="h2">Des mojitos à petits prix pour toute la vie</h2>
    </article>
    <article class="wrapper-video">
      <video class="video" src="/videos/videoTitoMojito.webm" autoplay loop muted playsinline></video>
      <div class="container-video">
        <p>Bienvenue chez <span>titomojito</span>, votre destination incontournable à Toulouse pour un art de <span>"mojiter"</span> unique à partir 3.90€!</p>
        <NuxtLink to="/le-bar" class="button">
          Nous découvrir
        </NuxtLink>
      </div>
    </article>
  </section>
</template>

<style scoped>
.container {
  margin-top: 100px;
}
.h2 {
  grid-column: 1/13;
  text-align: center;
  color: #2B2B2B;
  font-size: clamp(30px, 8vw, 80px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.wrapper-video {
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
  height: 70vh;
  min-width: 100%;
  border-radius: 10px;
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
  font-family: "Bradley Hand", sans-serif;
  font-size: 35px;
}

@media screen and (max-width: 900px) {
  .container {
    /*margin-top: 300px;*/
  }
  video {
    height: 50vh;
  }
  .container-video {
    p {
      font-size: 15px;
      width: 90%;
      margin: auto;
    }
    span {
      font-size: 25px;
    }
  }
  article {
    margin-top: 40px;
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>