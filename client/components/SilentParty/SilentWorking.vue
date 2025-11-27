<script setup lang="ts">
import { ref } from "vue"

const steps = [
  "À l'entrée, vous recevez un casque sans fil prêt à l’usage.",
  "Bleu, Rouge, Vert : la lumière change selon la musique choisie.",
  "Chacun écoute son style, mais l’énergie reste collective.",
  "Montez, baissez, mettez en pause à tout moment.",
]

// état du flip des cards en mobile
const flipped = ref([false, false, false, false])

const toggleFlip = (index: number) => {
  if (window.innerWidth < 900) {
    flipped.value[index] = !flipped.value[index]
  }
}
</script>

<template>
  <section class="wrapper">
    <div class="container">

      <h3 class="h3 title">Comment ça marche ?</h3>

      <article class="cards-container">

        <div
            v-for="(text, index) in steps"
            :key="index"
            class="card"
            :class="{ flippedMobile: flipped[index] }"
            @click="toggleFlip(index)"
        >
          <div class="flip">

            <!-- FACE FRONT -->
            <div class="front">
              <div class="circle">{{ index + 1 }}</div>

              <h4 v-if="index === 0" class="h4">On vous donne un casque</h4>
              <h4 v-if="index === 1" class="h4">Choisissez votre ambiance</h4>
              <h4 v-if="index === 2" class="h4">Dansez comme vous aimez</h4>
              <h4 v-if="index === 3" class="h4">Gérez votre volume</h4>

              <p class="tap-hint">cliquez pour découvrir</p>
            </div>

            <!-- FACE BACK -->
            <div class="back">
              <p>{{ text }}</p>
            </div>

          </div>
        </div>

      </article>

    </div>
  </section>
</template>

<style scoped>
.wrapper {
  margin-top: 90px;

  .container {
    grid-column: 1/13;
    display: flex;
    flex-direction: column;
    gap: 40px;

    .title {
      margin-bottom: 20px;
    }

    .cards-container {
      display: grid;
      gap: 25px;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      align-items: stretch;

      .card {
        perspective: 1000px;
        height: 100%;
        min-height: 450px;
        position: relative;
        cursor: pointer;

        .flip {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s ease;
          border-radius: 12px;
        }

        /* DESKTOP — flip au hover */
        &:hover .flip {
          transform: rotateY(180deg);
        }

        /* MOBILE — flip via clic */
        &.flippedMobile .flip {
          transform: rotateY(180deg) !important; /* ❤️ fix crucial */
        }

        .front,
        .back {
          height: 100%;
          border: 2px solid var(--tertiary-color);
          border-radius: 12px;
          padding: 10px 10px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;

          backface-visibility: hidden;
          position: absolute;
          inset: 0;

          .tap-hint {
            display: none; /* caché par défaut */
            margin-top: 10px;
          }
        }

        .back {
          transform: rotateY(180deg);
          padding: 40px 25px;
          background-color: var(--tertiary-color);
        }

        .circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--tertiary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .h4 {
          font-weight: 700;
          margin: 0;
        }

        .back p {
          max-width: 300px;
        }
      }
    }
  }
}

/* ------------------------------------------------------
   RESPONSIVE — MOBILE < 900px
------------------------------------------------------ */
@media (max-width: 900px) {
  /* Kill flip hover totalement */
  .wrapper .container .cards-container .card:hover .flip {
    transform: none !important;
  }

  /* Affiche le hint uniquement mobile */
  .wrapper .container .cards-container .card .front .tap-hint {
    display: block !important;
  }
  .cards-container {
    padding-bottom: 75px;
  }
}
</style>