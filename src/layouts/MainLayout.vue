<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Barra del Header o barra de navegacion -->

    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title @click="navigateHome"> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- Propiedad para el menu lateral -->
    <!-- side="right" (abir sobre la derecha)-->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <!-- Lista -->
      <q-list>
        <!-- Encabezado de la lista -->
        <q-item-label header> Essential Links </q-item-label>

        <!-- Items de la lista -->
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useRouter } from "vue-router";
const router = useRouter();

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "las la-graduation-cap",
    link: "https://quasar.dev",
  },
  {
    title: "Typography",
    caption: "Tipos de letras en Quasar",
    icon: "las la-align-left",
    link: "typography",
  },
  {
    title: "Flex Layout",
    caption: "Estilos con flex",
    icon: "las la-layer-group",
    link: "flex",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const navigateHome = () => {
  router.push("/");
};
</script>
