<script setup lang="ts">
import { ref } from 'vue';

// Référence pour le prénom
const prenom = ref<string>('');

// Référence pour gérer l'image uploadée
const photo = ref<File | null>(null);
const photoPreview = ref<string | null>(null);

// Fonction pour gérer l'aperçu de la photo
const handlePhotoUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    photo.value = input.files[0];

    // Générer un aperçu de la photo
    const reader = new FileReader();
    reader.onload = () => {
      photoPreview.value = reader.result as string;
    };
    reader.readAsDataURL(photo.value);
  }
};
</script>

<template>
  <section class="wrapper">
    <div class="utilisateur">
      <div class="name">
        <label for="prenom">Prénom</label>
        <input
            type="text"
            id="prenom"
            v-model="prenom"
            placeholder="Votre prénom"
        />
      </div>
      <div class="photo">
        <label for="photo">Photo de profil</label>
        <input type="file" id="photo" @change="handlePhotoUpload" accept="image/*" />
        <div v-if="photoPreview" class="photo-preview">
          <img :src="photoPreview" alt="Aperçu de la photo" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  margin-bottom: 180px;
}

.utilisateur {
  grid-column: 1/7;
}

.name {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

label {
  color: #2B2B2B;
  font-family: "Lexend Tera", sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

input {
  background: none;
  border: none;
}

input::placeholder {
  color: #2B2B2B;
  font-family: "Lexend Tera", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
</style>