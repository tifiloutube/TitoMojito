<script setup lang="ts">

</script>

<template>
  <footer class="desktop">
    <div class="topContainer wrapper">
      <p>Menu</p>
      <p>Social</p>
      <p>Contact</p>
    </div>
    <span></span>
    <div class="wrapper">
      <ul class="menu">
        <li><NuxtLink to="/" style="text-decoration: none; color: #2B2B2B;">Accueil</NuxtLink></li>
        <li><NuxtLink to="/le-bar" style="text-decoration: none; color: #2B2B2B;">Le bar</NuxtLink></li>
        <li><NuxtLink to="/equipe" style="text-decoration: none; color: #2B2B2B;">L'équipe</NuxtLink></li>
        <li><NuxtLink to="/carte" style="text-decoration: none; color: #2B2B2B;">La carte</NuxtLink></li>
      </ul>
      <ul class="socialNetwork">
        <li>
          <a href="https://www.instagram.com/titomojito.toulouse/" target="_blank" style="text-decoration: none; color: #2B2B2B;">Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com/toulousetitomojito/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank" style="text-decoration: none; color: #2B2B2B;">Facebook</a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@titomojito.toulouse?_t=8k4dhueae09&_r=1" target="_blank" style="text-decoration: none; color: #2B2B2B;">TikTok</a>
        </li>
      </ul>
      <ul class="contact">
        <li>
          <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x12aebbf86ffe08b1:0xe3ada0abbbee574c?sa=X&ved=1t:8290&ictx=111" style="text-decoration: none; color: #2B2B2B;" target="_blank">40 Rue Jean-Baptiste Merly, 31000 Toulouse</a>
        </li>
        <li>
          <a href="mailto:info@titomojito.fr" style="text-decoration: none; color: #2B2B2B; word-break: break-word;">info@titomojito.fr</a>
        </li>
      </ul>
    </div>
    <p class="copyright">Copyright © 2024 par TitoMojito. Tous droits réservés. Developpement & Design credits : <a class="linkdev" href="https://vilarinho-philippe.netlify.app/" target="_blank"> Philippe VILARINHO</a> </p>
  </footer>
  <footer class="mobile">
    <div>
      <h3 class="h3">Menu</h3>
      <span class="line"></span>
      <ul class="menu">
        <li><NuxtLink to="/" style="text-decoration: none; color: #2B2B2B;">Accueil</NuxtLink></li>
        <li><NuxtLink to="/le-bar" style="text-decoration: none; color: #2B2B2B;">Le bar</NuxtLink></li>
        <li><NuxtLink to="/equipe" style="text-decoration: none; color: #2B2B2B;">L'équipe</NuxtLink></li>
        <li><NuxtLink to="/carte" style="text-decoration: none; color: #2B2B2B;">La carte</NuxtLink></li>
      </ul>
    </div>
    <div>
      <h3 class="h3">Social</h3>
      <span class="line"></span>
      <ul class="socialNetwork">
        <li>
          <a href="https://www.instagram.com/titomojito.toulouse/" target="_blank" style="text-decoration: none; color: #2B2B2B;">Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com/toulousetitomojito/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank" style="text-decoration: none; color: #2B2B2B;">Facebook</a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@titomojito.toulouse?_t=8k4dhueae09&_r=1" target="_blank" style="text-decoration: none; color: #2B2B2B;">TikTok</a>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="h3">Contanct</h3>
      <span class="line"></span>
      <ul class="contact">
        <li>
          <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x12aebbf86ffe08b1:0xe3ada0abbbee574c?sa=X&ved=1t:8290&ictx=111" style="text-decoration: none; color: #2B2B2B;" target="_blank">40 Rue Jean-Baptiste Merly, 31000 Toulouse</a>
        </li>
        <li>
          <a href="mailto:info@titomojito.fr" style="text-decoration: none; color: #2B2B2B; word-break: break-word;">info@titomojito.fr</a>
        </li>
      </ul>
    </div>
    <p class="copyright">Copyright © 2024 par TitoMojito. Tous droits réservés. Developpement & Design credits : <a class="linkdev" href="https://vilarinho-philippe.netlify.app/" target="_blank"> Philippe VILARINHO</a> </p>
  </footer>
</template>

<style scoped>
.mobile {
  display: none;
}

footer {
  margin-top: -90px;
  color: #2B2B2B;
  font-family: "Lexend Tera", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  p {
    font-size: 20px;
    font-weight: 400;
  }
  a {
    font-size: 18px;
    font-weight: 400;
  }
}

.topContainer {
  grid-column-start: 1;
  grid-column-end: 13;
}
.topContainer p:nth-child(1) {
  display: grid;
  grid-column-start: 1;
  grid-column-end: 4;
}
.topContainer p:nth-child(2) {
  display: grid;
  grid-column-start: 5;
  grid-column-end: 9;
}
.topContainer p:nth-child(3) {
  display: grid;
  grid-column-start: 9;
  grid-column-end: 13;
}
span {
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  width: 100vw;
  border: 1px solid #2B2B2B;
}

li {
  list-style: none;
}

.menu {
  display: grid;
  grid-column-start: 1;
  grid-column-end: 4;
  gap: 30px;
}
.socialNetwork {
  display: flex;
  flex-direction: column;
  gap: 30px;
  grid-column-start: 5;
  grid-column-end: 9;
}
.contact {
  display: flex;
  flex-direction: column;
  gap: 30px;
  grid-column-start: 9;
  grid-column-end: 13;
}

.copyright {
  margin-top: 125px;
  margin-bottom: 125px;
  width: 100vw;
  text-align: center;
  color: #2B2B2B;
  font-family: "Lexend Tera", sans-serif;
  font-size: 10px !important;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

NuxtLink {
  text-decoration: none;
  color: #2B2B2B;
}

.linkdev {
  color: #2B2B2B;
  font-family: "Lexend Tera", sans-serif;
  font-size: 10px !important;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration: none;
  transition: ease 0.5s;
}

.linkdev:hover {
  color: #7ed956;
  transition: ease 0.5s;
}

@media screen and (max-width: 900px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .line {
      margin-top: 15px;
    }
    .h3 {
      font-size: 25px;
      font-weight: 300;
    }
    li {
      font-size: 20px;
      font-weight: 300;
    }
    .h3, li {
      padding-left: 15px;
      padding-right: 15px;
    }
    .copyright {
      margin-top: 30px;
    }
  }
}
</style>