<template>
  <div>
    <!-- Selector de idioma -->
    <select v-model="currentLocale" @change="changeLanguage">
      <option value="en-US">English</option>
      <option value="es">Español</option>
    </select>

    <!-- Frase que se traducirá según el idioma seleccionado -->
    <p>{{ t("message.greeting") }}</p>
  </div>
</template>

<script setup>
defineOptions({
  name: "TraductorPage",
});

import { useI18n } from "vue-i18n";
import { ref } from "vue";

// Obtenemos la funcionalidad i18n
const { t, locale } = useI18n();

// Definimos el locale actual
const currentLocale = ref(locale.value);

// Función para cambiar el idioma
function changeLanguage() {
  locale.value = currentLocale.value;
}
</script>
