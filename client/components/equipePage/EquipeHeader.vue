<script setup lang="ts">

</script>

<template>
  <section class="container">
    <div class="containerTitle">
      <img src="/images/backgrounds/backgroundContact.jpg" alt="" class="backgroundImage">
      <h1 class="h1">LE STAFF</h1>
    </div>
  </section>
</template>

<style scoped>
.container {
  background-color: #7ED956;
  border-radius: 20px;
}
.h1 {
  font-family: "Mr Dafoe", sans-serif;
  font-size: 150px;
  letter-spacing: 0.08em;
  text-shadow: 0px 4px 50px var(--tertiary-color);
}
.containerTitle {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.backgroundImage {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  border-radius: 20px;
  filter: blur(7.5px);
  position: relative;
}
.h1 {
  position: absolute;
  text-align: center;
  color: #F1ECE8;
}
</style>