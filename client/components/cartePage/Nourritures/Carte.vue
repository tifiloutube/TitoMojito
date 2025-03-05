<script setup lang="js">
import { onMounted, onUnmounted, ref, reactive, nextTick } from 'vue';
import { gsap } from 'gsap';

const carteNourriture = ref([]);
const openStates = reactive({});
const hoveredImage = ref(null);
const hoveredImageStyle = reactive({ left: '0px', top: '0px', opacity: 0, scale: 0 });
let mouseInside = false; // Variable pour suivre la souris
let hideTimeout = null; // Timer pour éviter disparition instantanée

async function loadCarteNourriture() {
  try {
    const config = useRuntimeConfig();
    const url = `${config.public.apiUrl}/88`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();
    carteNourriture.value = data.acf_fields.carte_nourriture;
    updateOpenStates(window.innerWidth);
  } catch (error) {
    console.error("Erreur lors de la requête fetch:", error);
  }
}

function toggle(index) {
  openStates[index] = !openStates[index];
}

function updateOpenStates(width) {
  const isOpenByDefault = width > 900;
  carteNourriture.value.forEach((_, index) => {
    openStates[index] = isOpenByDefault;
  });
}

function handleResize() {
  updateOpenStates(window.innerWidth);
}

function handleMouseEnter(e, nourriture) {
  console.log(`👉 Mouse Enter sur: ${nourriture.nom_de_la_nourriture}`);
  console.log("❌ Annulation du timeout de disparition");

  mouseInside = true;
  clearTimeout(hideTimeout); // Annule le `mouseleave` en attente

  gsap.killTweensOf(hoveredImageStyle); // Stopper toute animation en cours
  hoveredImage.value = nourriture.photo_de_la_nourriture.url;

  nextTick(() => {
    console.log("✅ Affichage immédiat de l'image avec set()");
    gsap.set(hoveredImageStyle, {
      left: `${e.clientX + 20}px`,
      top: `${e.clientY - 100}px`,
      opacity: 0,
      scale: 0.5,
    });

    console.log("🎬 Animation d'apparition");
    gsap.to(hoveredImageStyle, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: 'power3.out',
    });

    moveImage(e);
  });
}

function handleMouseLeave() {
  console.log("👋 Mouse Leave détecté !");
  mouseInside = false;

  // On attend un court instant avant de cacher l'image, pour éviter le flickering
  hideTimeout = setTimeout(() => {
    if (!mouseInside) {
      console.log("🔥 Disparition de l'image (animation de fade-out)");
      gsap.to(hoveredImageStyle, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: 'power3.out',
        onComplete: () => {
          console.log("💀 Image cachée après fade-out");
          hoveredImage.value = null;
        },
      });
    } else {
      console.log("🚫 Mouse Leave annulé, car la souris est toujours sur un élément !");
    }
  }, 50); // Petit délai pour éviter les disparitions instantanées
}

function moveImage(e) {
  //console.log(`🎯 Mouse Move -> X: ${e.clientX}, Y: ${e.clientY}`);

  gsap.to(hoveredImageStyle, {
    left: `${e.clientX + 20}px`,
    top: `${e.clientY - 100}px`,
    duration: 0.1,
    ease: 'power3.out',
  });
}

onMounted(() => {
  loadCarteNourriture();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <section>
    <article class="wrapper">
      <ul class="list-nourritures" v-for="(categorie, index) in carteNourriture" :key="index">
        <div class="list-nourritures_title" @click="toggle(index)">
          <h2 class="h2">{{ categorie.nourritures.categories_de_la_nourriture }}</h2>
            <svg :class="{ 'is-rotated': openStates[index] }" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1048_23)">
                <path d="M54.0001 38.935C54.0001 39.7336 53.696 40.5354 53.0827 41.1473C51.8608 42.3692 49.8833 42.3692 48.6614 41.1473L27.0003 19.4847L5.33771 41.1473C4.11578 42.3692 2.13663 42.3692 0.916447 41.1473C-0.305482 39.9253 -0.305482 37.9462 0.916447 36.7246L24.7881 12.8529C26.01 11.631 27.9891 11.631 29.2093 12.8529L53.0824 36.7246C53.6942 37.3344 54.0001 38.1347 54.0001 38.935Z" fill="#F1ECE8"/>
              </g>
              <defs>
                <clipPath id="clip0_1048_23">
                  <rect width="54" height="54" fill="white" transform="matrix(0 -1 1 0 0 54)"/>
                </clipPath>
              </defs>
          </svg>
        </div>
        <li
            v-show="openStates[index]"
            v-for="(nourriture, indexN) in categorie.nourritures.la_nourriture"
            :key="'nourriture-' + indexN"
            class="list-nourritures_nom_prix nourritureDesktop"
            @mouseenter="handleMouseEnter($event, nourriture)"
            @mouseleave="handleMouseLeave"
            @mousemove="moveImage"
        >
          <div>
            <ol>{{ nourriture.nom_de_la_nourriture }}</ol>
            <ol class="composition">{{ nourriture.composition_de_la_nourriture }}</ol>
          </div>
          <ol>{{ nourriture.prix_de_la_nourriture }}</ol>
        </li>
      </ul>
    </article>

    <!-- Image qui suit le curseur -->
    <div
        v-if="hoveredImage"
        class="hovered-image-container container-image"
        :style="hoveredImageStyle"
    >
      <img :src="hoveredImage" alt="Nourriture affichée au survol" class="imageHover"/>
    </div>
  </section>
</template>

<style scoped>
section{
  margin-top: 80px;
  margin-bottom: 140px;
  position: relative;
}
li {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.wrapper {
  .list-nourritures {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .list-nourritures_title {
      display: flex;
      justify-content: space-between;
    }
    .list-nourritures_nom_prix {
      position: relative;
      ol {
        font-size: 28px;
        font-family: "Bradley Hand", sans-serif;
      }
    }
  }
  .list-nourritures:nth-child(odd) {
    grid-column: 1/6;
  }
  .list-nourritures:nth-child(even) {
    grid-column: 8/13;
  }
}
.container-image {
  width: 322px;
  height: 215px;
  border-radius: 8px;
  overflow: hidden;
  position: fixed;
  transform: translate(0%, -50%);
  transition: transform 0.1s ease-out;
  z-index: 1000;
  pointer-events: none;
  .imageHover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.is-rotated {
  transform: rotate(180deg);
}

.list-nourritures_nom_prix {
  transition: all 0.5s ease;
}

.list-nourritures_title svg {
  transition: transform 0.5s ease;
}

@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.list-nourritures_nom_prix {
  animation: slideDown 0.5s ease forwards;
}
.composition {
  color: var(--color-primary);
  font-family: "Lexend Tera", sans-serif;
  font-size: 15px !important;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

@media screen and (max-width: 900px) {
  .wrapper {
    gap: 20px;
    .h2 {
      margin-top: auto;
      margin-bottom: auto;
    }
    ul {
      grid-column: 1/13 !important;
    }
  }
}
</style>