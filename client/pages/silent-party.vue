<script setup lang="ts">
import { onMounted } from "vue"
import { useRouter } from "vue-router"

import SilentHeader from "~/components/SilentParty/SilentHeader.vue"
import SilentConcept from "~/components/SilentParty/SilentConcept.vue"
import SilentWorking from "~/components/SilentParty/SilentWorking.vue"
import FAQ from "~/components/SilentParty/FAQ.vue"
import GallerySilent from "~/components/SilentParty/GallerySilent.vue"
import ProchaineDate from "~/components/SilentParty/ProchaineDate.vue"

const router = useRouter()

onMounted(() => {
  let attempts = 0

  while (attempts < 3) {
    const userCode = window.prompt("Entrez le code d'accès :")

    if (!userCode) {
      attempts++
      continue
    }

    if (userCode.trim().toLowerCase() === "silentparty") {
      return // accès autorisé
    }

    attempts++
    alert(`Code incorrect (${attempts}/3)`)
  }

  // 3 erreurs → redirection
  router.push("/")
})
</script>

<template>
  <SilentHeader />
  <SilentConcept />
  <SilentWorking />
  <FAQ />
  <ClientOnly>
    <GallerySilent />
  </ClientOnly>
  <ProchaineDate />
</template>

<style scoped>
</style>