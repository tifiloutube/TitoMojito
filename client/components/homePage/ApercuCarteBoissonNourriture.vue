<script setup lang="ts">

</script>

<template>
  <section class="wrapper">
    <h2 class="h2">
      Notre carte
    </h2>
    <div class="carte">
      <div class="image-wrapper">
        <img src="../../public/images/carte/carteBoissons.png">
        <div class="hover-text">On mijote quoi ?</div>
      </div>
      <div class="image-wrapper">
        <img src="../../public/images/carte/carteNourriture.png">
        <div class="hover-text">On grignote quoi ?</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  margin-top: 140px;
}
.h2 {
  grid-column-start: 1;
  grid-column-end: 13;
}
.carte {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 25px;
  grid-column-start: 1;
  grid-column-end: 13;
}

.carte .image-wrapper:nth-child(1) {
  position: relative;
  grid-column-start: 1;
  grid-column-end: 7;
  width: 100%;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
}

.carte .image-wrapper:nth-child(2) {
  position: relative;
  grid-column-start: 7;
  grid-column-end: 13;
  width: 100%;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
}


.image-wrapper .hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.carte img:nth-child(1) {
  object-fit: cover;
  border-radius: 20px;
  grid-column-start: 1;
  grid-column-end: 7;
  width: 100%;
  height: 450px;
  transition: filter 0.5s ease;
}

.carte img:nth-child(2) {
  object-fit: cover;
  border-radius: 20px;
  grid-column-start: 7;
  grid-column-end: 13;
  width: 100%;
  height: 450px;
  transition: filter 0.3s ease;
}
.carte img:nth-child(1):hover {
  filter: blur(10px);
}

.carte img:nth-child(2):hover {
  filter: blur(10px);
}

.carte .image-wrapper:hover .hover-text {
  visibility: visible;
  opacity: 1;
  color: #F1ECE8;
  font-family: "Lexend Tera", sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  text-align: center;
}
</style>