<script setup lang="js">
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';

const galleryPhotos = ref([]);
const clipPathValue = ref('inset(0px round 0px)');
let observer;

async function fetchGalleryData() {
  try {
    const response = await fetch('http://localhost:8888/titoMojito/wp-json/wp/v2/posts/173');
    const data = await response.json();
    galleryPhotos.value = data.acf_fields.galerie_photo;
    await nextTick();
    setImagesVisibility('hidden');
  } catch (error) {
    console.error('Erreur lors de la récupération des données de la galerie:', error);
  }
}

function setImagesVisibility(visibility) {
  const images = document.querySelectorAll('.gallery-item_image');
  images.forEach(img => {
    img.style.visibility = visibility;
  });
}

function animateImages() {
  const gallery = document.querySelector('.gallery');
  const images = document.querySelectorAll('.gallery-item_image');

  gsap.set(images, {
    x: () => gallery.offsetWidth / 2 - images[0].offsetWidth / 2,
    y: () => gallery.offsetHeight / 2 - images[0].offsetHeight / 2,
    scale: 0.5,
  });

  images.forEach((img, index) => {
    gsap.fromTo(img, {
      visibility: "hidden",
    }, {
      visibility: "visible",
      x: 0,
      y: 0,
      scale: 1,
      delay: index * 0.2,
      ease: "power3.out",
      onStart: function() {
        img.style.visibility = "visible";
      },
    });
  });
}

function handleScroll() {
  const scrollPosition = window.scrollY;
  const startScroll = 4500;
  const endScroll = 5000;

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
        animateImages();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const galleryElement = document.querySelector('.gallery');
  if (galleryElement) observer.observe(galleryElement);
}

onMounted(async () => {
  window.addEventListener('scroll', handleScroll);
  await fetchGalleryData();
  await nextTick();
  setupIntersectionObserver();
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
      <h2 class="h2">La galerie</h2>
      <div class="gallery" ref="gallery">
        <div v-for="photo in galleryPhotos" :key="photo.id" class="gallery-item">
          <img :src="photo.url" :alt="photo.alt" ref="images" class="gallery-item_image"/>
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
}
.gallery {
  display: grid;
  grid-column: 1/13;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
}
.gallery-item_image {
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
