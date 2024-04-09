<script setup lang="js">
import { ref, onMounted, nextTick, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

const config = useRuntimeConfig()

gsap.registerPlugin(ScrollTrigger);

const galleryPhotos = ref([]);
const clipPathValue = ref('inset(0px round 0px)');
const isMobileView = ref(null);
let observer;

async function fetchGalleryData() {
  try {
    const url = `${config.public.apiUrl}/173`
    const response = await fetch(url)
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

  const startPercentage = 92;
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

function handleResize() {
  isMobileView.value = window.innerWidth < 1025;
}

const generatePaginationHtml = (current, total) => {
  let paginationHtml = '';
  for (let i = 1; i <= total; i++) {
    const color = i === current ? '#7ED956' : 'white';
    const fontSize = i === current ? '1.5em' : '1em';
    paginationHtml += `<span style="color: ${color}; font-size: ${fontSize};" class="pagination-dot${i === current ? ' current-slide' : ''}">.${i}</span> `;
  }
  return paginationHtml;
};

onMounted(async () => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    await fetchGalleryData();
    await nextTick();
    setupIntersectionObserver();
    animateGalleryImages();
    handleResize();
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
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
      <div v-if="!isMobileView" class="gallery">
        <div v-for="photo in galleryPhotos" :key="photo.id" class="gallery-item">
          <img :src="photo.url" :alt="photo.alt" ref="images"/>
        </div>
      </div>
      <div v-else >
        <Swiper :modules="[Pagination, Autoplay]"
                :slidesPerView="1"
                :spaceBetween="0"
                :loop="true"
                :pagination="{
                  type: 'custom',
                  renderCustom: (swiper, current, total) => generatePaginationHtml(current, total),
                  clickable: true
                }"
                :autoplay="{
                  delay: 5000,
                  disableOnInteraction: false
                }"
        style="text-align: center">
          <SwiperSlide v-for="photo in galleryPhotos" :key="photo.id" class="gallery-item">
            <img :src="photo.url" :alt="photo.alt" class="imageSwiper"/>
          </SwiperSlide>
        </Swiper>
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
  font-size: clamp(50px, 8vw, 120px);
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
  width: 100%;
  height: auto;
}
.gallery-item:nth-child(6n+1) {
  transform: rotate(-3.015deg);
}
.gallery-item:nth-child(6n+2) {
  transform: rotate(4.02deg);
  padding-top: 150px;
}
.gallery-item:nth-child(6n+3) {
  transform: rotate(18.069deg);
}
.gallery-item:nth-child(6n+4) {
  transform: rotate(-15.099deg);
}
.gallery-item:nth-child(6n+5) {
  transform: rotate(8.028deg);
  padding-top: 150px;
}
.gallery-item:nth-child(6n+6) {
  transform: rotate(-18.05deg);
}

@media (max-width: 1024px) {
  .wrapper {
    display: block;
  }
  .gallery-item img {
    width: 80%;
    display: flex;
    margin: auto;
  }
  .gallery-item:nth-child(6n+1) {
    transform: rotate(3.015deg);
    overflow: hidden;
    padding: 0;
  }
  .gallery-item:nth-child(6n+2) {
    transform: rotate(-5.02deg);
    overflow: hidden;
    padding: 0;
  }
  .gallery-item:nth-child(6n+3) {
    transform: rotate(5.069deg);
    overflow: hidden;
    padding: 0;
  }
  .gallery-item:nth-child(6n+4) {
    transform: rotate(-6.099deg);
    overflow: hidden;
    padding: 0;
  }
  .gallery-item:nth-child(6n+5) {
    transform: rotate(3.028deg);
    overflow: hidden;
    padding: 0;
  }
  .gallery-item:nth-child(6n+6) {
    transform: rotate(-4.05deg);
    overflow: hidden;
    padding: 0;
  }
  .imageSwiper {
    display: flex;
    margin: auto;
  }
  .gallery-item {
    margin-bottom: 50px;
  }
}

@media (max-width: 900px) {

}
</style>
