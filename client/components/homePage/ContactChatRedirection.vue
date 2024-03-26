<script setup lang="js">
import { onMounted, onUnmounted, ref } from 'vue';

const clipPathValue = ref('inset(0px round 0px)');

function calculateScrollValue(percentage) {
  const maxScrollValue = document.body.scrollHeight - window.innerHeight;
  return (percentage / 100) * maxScrollValue;
}

function handleScroll() {
  const scrollPosition = window.scrollY;

  const startPercentage = 94;
  const endPercentage = 100;

  const startScroll = calculateScrollValue(startPercentage);
  const endScroll = calculateScrollValue(endPercentage);

  if (scrollPosition >= startScroll && scrollPosition <= endScroll) {
    const progressRatio = (scrollPosition - startScroll) / (endScroll - startScroll);

    const insetTop = 25 * progressRatio;
    const insetBottom = 200 * progressRatio;
    const insetSides = 25 * progressRatio;
    const borderRadius = 50 * progressRatio;

    clipPathValue.value = `inset(${insetTop}px ${insetSides}px ${insetBottom}px round ${borderRadius}px)`;
  } else if (scrollPosition > endScroll) {
    clipPathValue.value = 'inset(25px 25px 200px round 50px)';
  } else if (scrollPosition < startScroll) {
    clipPathValue.value = 'inset(0px round 0px)';
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section class="container" :style="{ clipPath: clipPathValue }">
    <article class="containerImage">
      <img src="/images/backgrounds/backgroundContact.jpg" alt="" class="background">
      <div class="contact">
        <h2 class="h2">UNE ENVIE ? CONTACTEZ-NOUS</h2>
        <button class="button">Contactez-nous</button>
      </div>
    </article>
    <article class="containerEnd">
      <h2 class="h2">NOUS VOUS MOJITONS UNE SURPRISE ! <br>
        UN PEU DE PATIENCE</h2>
    </article>
  </section>
</template>

<style scoped>
.container {
  margin-top: 140px;
  display: grid;
}

.containerImage {
  display: grid;
  grid-column-start: 1;
  grid-column-end: 13;
  position: relative;
  align-items: center;
  justify-content: center;
}

.background {
  width: 100vw;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
  filter: blur(7.5px);
  max-height: 555px;
}

.contact {
  position: absolute;
  text-align: center;
  width: 100%;
}

.h2 {
  color: #F1ECE8;
}

.button {
  margin-top: 20px;
  padding: 11px 36px;
  border-radius: 8px;
  background: #7ED956;
  border: none;
  color: #2B2B2B;
  text-align: center;
  font-family: "Mr Dafoe", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.containerEnd {
  background: #7ED956;
  height: 170vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .h2 {
    color: #2B2B2B;
    text-align: center;
  }
}
</style>