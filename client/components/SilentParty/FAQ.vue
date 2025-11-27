<script setup lang="ts">
import { ref } from "vue"

const faq = [
  { q: "Comment fonctionne la soirée casque ?", a: "Chaque participant reçoit un casque sans fil...Chaque participant reçoit un casque sans fil...Chaque participant reçoit un casque sans fil..." },
  { q: "Peut-on discuter facilement pendant la soirée ?", a: "Oui, il suffit d’enlever un côté..." },
  { q: "Combien de canaux musicaux disponibles ?", a: "3 canaux : Bleu, Rouge, Vert." },
  { q: "Y a-t-il des nuisances sonores ?", a: "Aucune, tout passe dans les casques." },
  { q: "Peut-on régler le volume individuellement ?", a: "Oui, chaque casque a ses propres réglages." },
  { q: "Convient pour quels types d'événements ?", a: "Soirées, festivals, entreprises, mariages..." }
]

const opened = ref(faq.map(() => false))

const toggle = i => opened.value[i] = !opened.value[i]

// → on split la liste en 2 colonnes
const leftCol = faq.filter((_, i) => i % 2 === 0)
const rightCol = faq.filter((_, i) => i % 2 === 1)
</script>

<template>
  <section class="wrapper">
    <div class="container">
      <h3 class="h3 title">FAQ</h3>

      <div class="faq-columns">

        <!-- COLONNE GAUCHE -->
        <div class="col">
          <div
              v-for="(item, i) in leftCol"
              :key="'L'+i"
              class="faq-item"
              @click="toggle(i*2)"
          >
            <div class="question">
              <span>{{ item.q }}</span>
              <span class="arrow" :class="{ open: opened[i*2] }">
                <svg width="25" height="25" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1048_23)">
              <path d="M54.0001 38.935C54.0001 39.7336 53.696 40.5354 53.0827 41.1473C51.8608 42.3692 49.8833 42.3692 48.6614 41.1473L27.0003 19.4847L5.33771 41.1473C4.11578 42.3692 2.13663 42.3692 0.916447 41.1473C-0.305482 39.9253 -0.305482 37.9462 0.916447 36.7246L24.7881 12.8529C26.01 11.631 27.9891 11.631 29.2093 12.8529L53.0824 36.7246C53.6942 37.3344 54.0001 38.1347 54.0001 38.935Z" fill="#F1ECE8"/>
            </g>
            <defs>
              <clipPath id="clip0_1048_23">
                <rect width="54" height="54" fill="white" transform="matrix(0 -1 1 0 0 54)"/>
              </clipPath>
            </defs>
          </svg>
              </span>
            </div>

            <div
                class="answer-wrapper"
                :style="{ maxHeight: opened[i*2] ? '200px' : '0px' }"
            >
              <p class="answer">{{ item.a }}</p>
            </div>

          </div>
        </div>

        <!-- COLONNE DROITE -->
        <div class="col">
          <div
              v-for="(item, i) in rightCol"
              :key="'R'+i"
              class="faq-item"
              @click="toggle(i*2+1)"
          >
            <div class="question">
              <span>{{ item.q }}</span>
              <span class="arrow" :class="{ open: opened[i*2+1] }">
                <svg width="25" height="25" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1048_23)">
              <path d="M54.0001 38.935C54.0001 39.7336 53.696 40.5354 53.0827 41.1473C51.8608 42.3692 49.8833 42.3692 48.6614 41.1473L27.0003 19.4847L5.33771 41.1473C4.11578 42.3692 2.13663 42.3692 0.916447 41.1473C-0.305482 39.9253 -0.305482 37.9462 0.916447 36.7246L24.7881 12.8529C26.01 11.631 27.9891 11.631 29.2093 12.8529L53.0824 36.7246C53.6942 37.3344 54.0001 38.1347 54.0001 38.935Z" fill="#F1ECE8"/>
            </g>
            <defs>
              <clipPath id="clip0_1048_23">
                <rect width="54" height="54" fill="white" transform="matrix(0 -1 1 0 0 54)"/>
              </clipPath>
            </defs>
          </svg>
              </span>
            </div>

            <div
                class="answer-wrapper"
                :style="{ maxHeight: opened[i*2+1] ? '200px' : '0px' }"
            >
              <p class="answer">{{ item.a }}</p>
            </div>
          </div>
        </div>

      </div>

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
      text-align: center;
    }

    .faq-columns {
      display: flex;
      gap: 25px;

      @media (max-width: 900px) {
        flex-direction: column;
      }

      .col {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 25px;

        .faq-item {
          border: 2px solid var(--tertiary-color);
          border-radius: 12px;
          padding: 5px 10px;
          background: var(--white-color);
          cursor: pointer;

          .question {
            display: flex;
            justify-content: space-between;
            padding: 15px 5px;

            span {
              font-weight: 600;
            }

            .arrow {
              transition: transform 0.3s ease;
            }

            .arrow.open {
              transform: rotate(180deg);
            }
          }

          .answer-wrapper {
            overflow: hidden;
            transition: max-height 0.35s ease;
          }

          .answer {
            padding: 10px 5px 20px;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>