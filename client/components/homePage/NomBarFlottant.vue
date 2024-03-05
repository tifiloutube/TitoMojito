<script setup lang="js">
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.title', {
    duration: 1.5,
    opacity: 1,
    y: 0,
    startAt: { opacity: 0, y: 50 },
    onComplete: () => {
      gsap.to('.floating-element_mojito', {
        duration: 1,
        opacity: 1,
        y: 0,
        startAt: { opacity: 0, y: 50 },
      });
      gsap.to('.floating-element', {
        duration: 1,
        opacity: 1,
        y: 0,
        startAt: { opacity: 0, y: 50 },
        stagger: 0.1,
      });
    }
  })
  gsap.to(".floating-element-anim", {
    yPercent: -30,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".floating-container",
      scrub: true
    }
  })
});
</script>

<template>
  <main class="">
    <section class="">
      <div class="container-title" id="container-title">
        <h1 class="h1HomePage title">Welcome to <br>
          <span class="titleLine">Tito <span class="titleWorld">Mojito</span></span>
        </h1>
        <img src="../../public/images/backgrounds/backgroundPlanhce.png" alt="image de fond : L'image représente une planche en bois." class="imageTitle">
        <div class="floating-container">
          <img src="../../public/images/floatImage/glaçon.png" alt="" class="floating-element floating-element-anim">
          <img src="../../public/images/floatImage/glaçon.png" alt="" class="floating-element floating-element-anim">
          <img src="../../public/images/floatImage/menthe.png" alt="" class="floating-element floating-element-anim">
          <img src="../../public/images/floatImage/menthe.png" alt="" class="floating-element floating-element-anim">
          <img src="../../public/images/floatImage/citron.png" alt="" class="floating-element floating-element-anim">
          <img src="../../public/images/floatImage/citron.png" alt="" class="floating-element floating-element-anim">
        </div>
        <img src="../../public/images/floatImage/4mojitos.png" alt="" class="floating-element_mojito floating-element-anim">
      </div>
    </section>
  </main>
</template>


<style scoped>
.imageTitle {
  width: 100%;
  height: 580px;
  border-radius: 0px 0px 20px 20px;
}

.container-title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 580px;
  grid-column-start: 1;
  grid-column-end: 13;
}

.title {
  transform: rotate(-18.266deg);
  font-size: 90px;
  position: absolute;
  z-index: 1;
  color: white;
  text-align: center;
  opacity: 0;
  .titleLine {
    font-size: 180px;
  }
  .titleWorld {
    color: #7ED956;
  }
}

.floating-container {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}

.floating-container img:nth-child(1), .floating-container img:nth-child(2) {
  max-width: 240px;
  max-height: 240px;
}

.floating-container img:nth-child(3), .floating-container img:nth-child(4) {
  max-width: 158px;
  max-height: 115px;
}

.floating-container img:nth-child(5), .floating-container img:nth-child(6) {
  max-width: 200px;
  max-height: 133px;
}

.floating-element {
  position: absolute;
  opacity: 0;
}

.floating-container img:nth-child(1) {
  top: 89px;
  left: 183px;
}

.floating-container img:nth-child(2) {
  top: 152px;
  right: 174px;
  transform: scaleX(-1);
}

.floating-container img:nth-child(3) {
  top: 335px;
  left: 104px;
}

.floating-container img:nth-child(4) {
  top: 528px;
  right: 215px;
  transform: scaleX(-1);
}

.floating-container img:nth-child(5) {
  top: 166px;
  left: 392px;
}

.floating-container img:nth-child(6) {
  top: 370px;
  right: 115px;
}

.floating-element_mojito {
  position: absolute;
  width: 584px;
  height: 584px;
  top: 603px;
  opacity: 0;
}
</style>