<script setup lang="js">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const isOpenWidth = ref(false);
const isOpenHeight = ref(false);
const showMenuItems = ref(false);
const menuList = ref(null);
const isNavVisible = ref(null);
const navElement = ref(null);
const menuFullyOpened = ref(false);
const route = useRoute();

const routeName = computed(() => {
  switch (route.path) {
    case '/': return 'Accueil';
    case '/le-bar': return 'Le bar';
    case '/equipe': return 'L’équipe';
    case '/carte': return 'Les cartes';
    case '/carte/nourriture': return 'Tapas';
    case '/carte/boissons': return 'Boissons';
    default: return 'Page Inconnue';
  }
});

let hideTimeout = null;

function resetHideTimer() {
  if (hideTimeout) {
    clearTimeout(hideTimeout);
  }
  if (navElement.value) {
    if (!isNavVisible.value) {
      navElement.value.style.transform = 'translate(-50%, 0%)';
      isNavVisible.value = true;
    }

    hideTimeout = setTimeout(() => {
      if (navElement.value) {
        navElement.value.style.transform = 'translate(-50%, 150%)';
        isNavVisible.value = false;
      }
    }, 5000);
  }
}

function toggleMenu() {
  if (!isOpenWidth.value && !isOpenHeight.value) {
    isOpenWidth.value = true;
    setTimeout(() => {
      isOpenHeight.value = true;
      setTimeout(() => {
        showMenuItems.value = true;
        if (menuList.value) {
          setTimeout(() => {
            menuList.value.style.opacity = '1';
            menuFullyOpened.value = true;  // Indicateur mis à true lorsque le menu est complètement ouvert
            setTimeout(() => {
              // Activation de la possibilité de fermeture par mouseleave après 2 secondes
              navElement.value.addEventListener('mouseleave', closeOnMouseLeave);
            }, 2000);
          }, 20);
        }
      }, 300);
    }, 300);
  } else {
    menuFullyOpened.value = false;  // Réinitialiser l'indicateur lorsque le menu commence à se fermer
    navElement.value.removeEventListener('mouseleave', closeOnMouseLeave); // Désactiver l'écouteur d'événements lorsque le menu commence à se fermer
    if (menuList.value) {
      setTimeout(() => {
        menuList.value.style.opacity = '0';
      }, 20);
    }
    setTimeout(() => {
      showMenuItems.value = false;
      setTimeout(() => {
        isOpenHeight.value = false;
        setTimeout(() => {
          isOpenWidth.value = false;
        }, 300);
      }, 10);
    });
  }
}

function closeOnMouseLeave() {
  if (menuFullyOpened.value) {
    closeMenu();
  }
}

function openMenu() {
  isOpenWidth.value = true;
  setTimeout(() => {
    isOpenHeight.value = true;
    setTimeout(() => {
      showMenuItems.value = true;
    }, 500);
  }, 500);
}

function closeMenu() {
  if (menuList.value) {
    menuList.value.style.opacity = '0';
  }
  setTimeout(() => {
    showMenuItems.value = false;
    setTimeout(() => {
      isOpenHeight.value = false;
      setTimeout(() => {
        isOpenWidth.value = false;
      }, 500);
    }, 10);
  }, 10);
}

onMounted(() => {
  if (menuList.value) {
    menuList.value.style.transition = 'opacity 0.5s ease-in-out';
  }
  window.addEventListener('mousemove', resetHideTimer);
  window.addEventListener('scroll', resetHideTimer);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', resetHideTimer);
  window.removeEventListener('scroll', resetHideTimer);
  if (hideTimeout) {
    clearTimeout(hideTimeout);
  }
});
</script>

<template>
  <nav ref="navElement" :class="[{ 'open-width': isOpenWidth }, { 'open-height': isOpenHeight }, { 'nav-hidden': !isNavVisible }]" @mouseleave="closeOnMouseLeave">
  <ul ref="menuList" v-show="showMenuItems">
      <li @click="closeMenu">
        <NuxtLink to="/">Acceuil</NuxtLink>
      </li>
      <li @click="closeMenu">
        <NuxtLink to="/le-bar">Le Bar</NuxtLink>
      </li>
      <li @click="closeMenu">
        <NuxtLink to="/equipe">L'équipe</NuxtLink>
      </li>
      <li @click="closeMenu">
        <NuxtLink to="/carte">Les cartes</NuxtLink>
      </li>
    </ul>
    <div class="menu">
      <button @click="toggleMenu">Menu</button>
      <span class="separator"></span>
      <NuxtLink  @click="closeMenu" to="/">
      </NuxtLink>
      <span class="separator"></span>
      <h3>{{ routeName }}</h3>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    position: fixed;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%, 0%);
    backdrop-filter: blur(30px);
    background-color: rgba(43, 43, 43, 0.5);
    border: 1px dashed black;
    z-index: 100;
    border-radius: 8px;
    width: 500px;
    height: 80px;
    transition: width 0.5s, height 0.5s, transform 0.5s ease-in-out;
    .menu {
      display: grid;
      padding: 5px 0px;
      width: 500px;
      height: 80px;
      position: absolute;
      bottom: 0;
      transform: translate(-50%, 0%);
      left: 50%;
      grid-template-columns: 1fr 1px 1fr 1px 1fr;
      :nth-child(1) {
        cursor: pointer;
        border: none;
        background: none;
        font-size: 20px;
        grid-column: 1/2;
        margin: auto;
        color: #f9f6ed;
        font-family: "Lexend Tera", sans-serif;
      }
      :nth-child(3) {
        grid-column: 3/4;
        margin: auto;
      }
      :nth-child(5) {
        grid-column: 5/6;
        margin: auto;
        color: #f9f6ed;
        font-family: "Lexend Tera", sans-serif;
        font-size: 20px;
        font-weight: 300;
      }
      .separator {
        height: 100%;
        background-color: #f9f6ed;
        width: 1px;
      }
    }
  }
  .nav-hidden {
    transform: translate(-50%, 200%);
    transition: transform 0.5s ease-in-out;
  }
  .open-width {
    width: 800px;
  }

  .open-height {
    height: 300px;
  }

  ul {
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
    grid-template-rows: repeat(3, 1fr);
    margin: 2% auto auto;
    height: 260px;
    padding-left: 25px;
    padding-right: 25px;
    li {
      cursor: pointer;
      font-family: "Lexend Tera", sans-serif;
      color: #f9f6ed !important;
      font-size: 40px;
      list-style: none;
      font-weight: 300;
      margin: auto;
      width: 100%;
      border-bottom: 1px solid #f9f6ed;
      a {
        color: #f9f6ed;
        font-family: "Lexend Tera", sans-serif;
        transition: ease 0.2s;
      }
    }
    li:nth-child(odd) {
      grid-column: 1/2;
    }
    li:nth-child(even) {
      grid-column: 3/4;
    }
  }
  a:hover {
    color: #7ed956 !important;
    transition: ease 0.2s;
  }
  
  @media screen and (max-width: 900px) {
    .open-width {
      width: 80vw;
    }

    .open-height {
      height: 400px;
    }
    ul {
      display: flex;
      flex-direction: column;
      text-align: center;
      li {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    nav {
      width: 40vw;
      height: 50px;
      bottom: 5%;
      .menu {
        height: 50px;
        display: grid;
        grid-template-columns: 1fr !important;
        svg, span, h3 {
          display: none;
        }
      }
    }
    .nav-hidden {
      transform: translate(-50%, 400%) !important;
      transition: transform 0.5s ease-in-out;
    }
  }
</style>