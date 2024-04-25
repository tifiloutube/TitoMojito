<script setup lang="ts">

</script>

<template>
  <footer class="container">
    <div class="container-info">
      <h2 class="h2">
        <a href="mailto:info@titomojito.fr" class="mail">info@titomojito.fr</a>
      </h2>
      <div class="adresse">
        <h2 class="h2">
          Jeanne d'Arc
        </h2>
        <h3 class="h3">
          <a href="https://www.google.com/maps?sca_esv=d51f489173fcdb43&sca_upv=1&sxsrf=ACQVn089CGwVu83M24kBQ4KdWm_L_h1oZg:1714044143641&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3RpdG8gbW9qaXRvMgoQIxiABBgnGIoFMgQQIxgnMhMQLhiABBjHARgnGIoFGI4FGK8BMgQQIxgnMgsQABiABBiSAxiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIihpQ6wZY7RhwA3gAkAEBmAGiAaAB_wSqAQM3LjG4AQPIAQD4AQGYAgqgAvoDwgIHECMYsAMYJ8ICChAAGLADGNYEGEfCAggQABiABBiSA8ICAhAmwgIHECMYsAIYJ8ICChAAGIAEGJIDGA3CAhAQLhiABBgUGMcBGIcCGK8BmAMAiAYBkAYEkgcCMTCgB-JD&um=1&ie=UTF-8&fb=1&gl=fr&sa=X&geocode=KbEI_m_4u64SMUxX7ruroK3j&daddr=40+Rue+Jean-Baptiste+Merly,+31000+Toulouse">40 Rue Jean-Baptiste Merly, 31000 Toulouse</a>
        </h3>
      </div>
      <div class="adresse">
        <h2 class="h2">
          Jean-Jaurès
        </h2>
        <h3 class="h3">
          <a href="https://www.google.com/maps/dir//tito+mojito+jean+jaures/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x12aebd3407e919cd:0xf35ba9bf36667fe4?sa=X&ved=1t:3061&ictx=111">51 All. Jean Jaurès, 31000 Toulouse</a>
        </h3>
      </div>
      <h2 class="h2 phoneNumber">
        05 00 00 00 00
      </h2>
    </div>
    <div class="container-social">
      <a href="https://www.instagram.com/titomojito.toulouse/?hl=fr">Instagram</a>
      <a href="https://www.instagram.com/titomojito.toulouse/?hl=fr">TikTok</a>
      <a href="https://www.instagram.com/titomojito.toulouse/?hl=fr">Facebook</a>
      <NuxtLink to="">Légals</NuxtLink>
      <a href="mailto:info@titomojito.fr">Contact</a>
    </div>
  </footer>
</template>

<style scoped>
  .container {
    .container-info {
      .h2 {
        text-align: center;
        text-transform: uppercase;
        padding-bottom: 15px;
        .mail {
          text-decoration: underline;
        }
      }
      .h3 {
        text-align: center;
      }
      .adresse, .phoneNumber{
        margin-top: 15px;
      }
    }
    .container-social {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      border-top: 1px solid;
      margin-bottom: 120px;
      a {
        margin-top: 15px;
      }
    }
  }
</style>