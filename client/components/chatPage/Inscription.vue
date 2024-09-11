<script setup lang="ts">
import { ref, computed } from 'vue';

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

    const reader = new FileReader();
    reader.onload = () => {
      photoPreview.value = reader.result as string;
    };
    reader.readAsDataURL(photo.value);
  }
};

// Computed property pour vérifier si les deux champs (prénom et photo) sont remplis
const isFormValid = computed(() => {
  return prenom.value.trim() !== '' && photo.value !== null;
});
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
        <label for="photo">Photo</label>
        <input type="file" id="photo" @change="handlePhotoUpload" accept="image/*" />
        <div v-if="photoPreview" class="photo-preview">
          <img :src="photoPreview" alt="Aperçu de la photo" class="photoPreview" />
        </div>
      </div>
      <button
          class="chatButton"
          :disabled="!isFormValid"
          :class="{ active: isFormValid }"
      >
        Accéder au chat
      </button>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  margin-bottom: 180px;
}

.utilisateur {
  display: grid;
  grid-column: 1/7;
  gap: 80px;
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

.photo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.photoPreview {
  width: 183px;
  height: 260px;
  border-radius: 20px;
  object-fit: cover;
}

.chatButton {
  width: 237px;
  color: #2B2B2B;
  text-align: center;
  font-family: "Lexend Tera", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: 30px 23px;
  border-radius: 8px;
  border: none;
  background: #808080;
  cursor: not-allowed;
  transition: background 0.3s ease;
}

/* Style du bouton quand le formulaire est valide */
.chatButton.active {
  background: #7ED956;
  cursor: pointer;
}

.chatButton:disabled {
  opacity: 0.5;
}
</style>