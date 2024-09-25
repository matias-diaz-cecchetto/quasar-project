<!-- Componente de vue -->
<template>
  <q-page class="flex q-my-md">
    <span class="text-h3"> Bienvenido, {{ userEmail }}</span>
    <q-separator spaced="" />
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});

import { computed } from "vue";
import { useAuthStore } from "../store/auth/auth";
import { onMounted } from "vue";
const authStore = useAuthStore();

// Accede al correo electrónico desde el store
const userEmail = computed(() => authStore.userEmail);

onMounted(() => {
  authStore.initializeAuth();
});
</script>
