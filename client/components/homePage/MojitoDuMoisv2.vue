<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRuntimeConfig } from '#imports'

const mojitosDuMois = ref([])

async function loadMojitosDuMois() {
  try {
    const config = useRuntimeConfig()
    const url = `${config.public.apiUrl}/wp-json/wp/v2/posts/118`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();

    if(data.acf_fields && data.acf_fields.mojitos_du_mois) {
      mojitosDuMois.value = data.acf_fields.mojitos_du_mois.map(mojito => {
        return {
          saveur: mojito.mojito_du_mois.saveur_du_mois,
          imageBackground: mojito.mojito_du_mois.image_background_saveur_du_mois.url,
          couleurGradient: mojito.mojito_du_mois.couleur_du_mojito_du_mois_pour_le_degrade,
          imageMojito: mojito.mojito_du_mois.image_du_mojito_du_mois.url
        };
      });
    }

    console.log(data);
    console.log(mojitosDuMois.value);
  } catch (error) {
    console.error("Erreur lors de la requête fetch:", error);
  }
}

onMounted(loadMojitosDuMois);
</script>