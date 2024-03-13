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
    <article class="containerEnd">
      <h2 class="h2">ENVIE DE NOUS REJOINDRE ?</h2>
      <a href="mailto:info@titomojito.fr?subject=Candidature">Candidatez</a>
    </article>
  </section>
</template>

<style scoped>
.container {
  display: grid;
}

.h2 {
  color: #F1ECE8;
}

.containerEnd {
  background: #7ED956;
  height: 170vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  .h2 {
    color: #2B2B2B;
    text-align: center;
  }
  a {
    color:  #2B2B2B;
    text-decoration: underline #2B2B2B;
  }
}
</style>z