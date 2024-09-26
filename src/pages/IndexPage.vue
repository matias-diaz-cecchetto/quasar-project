<template>
  <q-page class="flex q-my-md">
    <span class="text-h3">
      Bienvenido, {{ userData.name }} {{ userData.apellido }}</span
    >
    <q-separator spaced="" />
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});

import { computed, onMounted } from "vue";
import { useAuthStore } from "../store/auth/auth";

const authStore = useAuthStore();

// Accede a los datos completos del usuario desde el store
const userData = computed(() => authStore.getUserData);

onMounted(() => {
  authStore.initializeAuth(); // Inicializar los datos del usuario al montar el componente
});
</script>
