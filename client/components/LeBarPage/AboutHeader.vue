<script setup lang="ts">

</script>

<template>
  <section>
    <article class="container">
      <div class="containerTitle">
        <img src="/images/backgrounds/backgroundContact.jpg" alt="" class="backgroundImage">
        <h1 class="h1">LE BAR</h1>
      </div>
      <aside>
        <div class="info">
          <p>2</p>
          <p>Le nombre de bars</p>
        </div>
        <div class="info">
          <p>3.90</p>
          <p>Le prix du mojito</p>
        </div>
        <div class="info">
          <p>1</p>
          <p>Ambiance magique</p>
        </div>
      </aside>
    </article>
  </section>
</template>

<style scoped>
.h1 {
  font-family: "Mr Dafoe", sans-serif;
  font-size: clamp(80px ,8vw,150px);
  letter-spacing: 0.08em;
  text-shadow: 0px 4px 50px var(--tertiary-color);
}
.container {
  background-color: #7ED956;
  border-radius: 20px;
}
.containerTitle {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.backgroundImage {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  border-radius: 20px;
  filter: blur(7.5px);
}
.h1 {
  position: absolute;
  text-align: center;
  color: #F1ECE8;
}
aside {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  min-height: 30vh;
}
.info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.info p:nth-child(1) {
  color: #2B2B2B;
  font-family: "Lexend Tera", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.info p:nth-child(2) {
  color: #2B2B2B;
  font-family: "Lexend Tera", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

@media screen and (max-width: 900px) {
  aside {
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .info p {
    font-size: 20px !important;
  }
}
</style>