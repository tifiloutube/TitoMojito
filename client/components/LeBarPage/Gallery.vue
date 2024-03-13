<script setup lang="js">
import { ref, onMounted, nextTick, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryPhotos = ref([]);
const clipPathValue = ref('inset(0px round 0px)');
let observer;

async function fetchGalleryData() {
  try {
    const response = await fetch('http://localhost:8888/titoMojito/wp-json/wp/v2/posts/173');
    const data = await response.json();
    galleryPhotos.value = data.acf_fields.galerie_photo;
    await nextTick();
  } catch (error) {
    console.error('Erreur lors de la récupération des données de la galerie:', error);
  }
}

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

function setupIntersectionObserver() {
  const options = {
    root: null,
    threshold: 0.1,
  };

  observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const galleryElement = document.querySelector('.gallery');
  if (galleryElement) observer.observe(galleryElement);
}

function animateGalleryImages() {
  const items = gsap.utils.toArray('.gallery-item');
  let delay = 0; // Initialiser le délai cumulatif

  items.forEach((item, index) => {
    gsap.fromTo(item,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
          delay: () => {
            const delayToUse = delay;
            delay += 0.2;
            return delayToUse;
          },
        }
    );
  });
}

onMounted(async () => {
  window.addEventListener('scroll', handleScroll);
  await fetchGalleryData();
  await nextTick();
  setupIntersectionObserver();
  animateGalleryImages(); // Initialise les animations après le chargement des données
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (observer) {
    observer.disconnect();
  }
});
</script>


<template>
  <section class="container" :style="{ clipPath: clipPathValue }">
    <article class="wrapper">
      <h2 class="h2">Le mur des photos</h2>
      <div class="gallery">
        <div v-for="photo in galleryPhotos" :key="photo.id" class="gallery-item">
          <img :src="photo.url" :alt="photo.alt" ref="images"/>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.container {
  margin-top: 130px;
  border-radius: 20px;
  background: #2B2B2B;
  padding-top: 30px;
  padding-bottom: 300px;
}
.h2 {
  grid-column: 1/13;
  color: #F9F6ED;
  font-family: "Mr Dafoe", sans-serif;
  font-size: 120px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.gallery {
  display: grid;
  grid-column: 1/13;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
}
.gallery-item img {
  display: flex;
  margin: auto;
  width: 436.193px;
  height: 600.008px;
}
.gallery-item:nth-child(6n+1) {
  transform: rotate(-3.015deg);
  overflow: hidden;
}
.gallery-item:nth-child(6n+2) {
  transform: rotate(4.02deg);
  overflow: hidden;
  padding-top: 150px;
}
.gallery-item:nth-child(6n+3) {
  transform: rotate(18.069deg);
  overflow: hidden;
}
.gallery-item:nth-child(6n+4) {
  transform: rotate(-15.099deg);
  overflow: hidden;
}
.gallery-item:nth-child(6n+5) {
  transform: rotate(8.028deg);
  overflow: hidden;
  padding-top: 150px;
}
.gallery-item:nth-child(6n+6) {
  transform: rotate(-18.05deg);
  overflow: hidden;
}
</style>
