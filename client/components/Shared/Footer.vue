<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="topContainer wrapper">
      <p>Menu</p>
      <p>Social</p>
      <p>Contact</p>
    </div>
    <span></span>
    <div class="wrapper">
      <ul class="menu">
        <li>Acceuil</li>
        <li>Le bar</li>
        <li>L'équipe</li>
        <li>La carte</li>
      </ul>
      <ul class="socialNetwork">
        <li>Instagram</li>
        <li>Facebook</li>
      </ul>
      <ul class="contact">
        <li>40 Rue Jean-Baptiste Merly, 31000 Toulouse</li>
        <li>titomojito@gmail.com</li>
      </ul>
    </div>
    <p class="copyright">Copyright © 2024 par TitoMojito. Tous droits réservés. Developpement & Design credits : VILARINHO Philippe</p>
  </footer>
</template>

<style scoped>

footer {
  margin-top: -90px;
  color: #2B2B2B;
  font-family: "Lexend Tera", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
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
  margin-top: 50px;
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
  margin-top: 120px;
  margin-bottom: 20px;
  width: 100vw;
  text-align: center;
  color: #2B2B2B;
  font-family: "Lexend Tera", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
</style>