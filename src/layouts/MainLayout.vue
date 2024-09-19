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
          @click="toggleSideMenu"
        />

        <q-toolbar-title @click="navigateHome"> Quasar App </q-toolbar-title>

        <!-- TODO: <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <!-- Propiedad para el menu lateral -->
    <!-- side="right" (abir sobre la derecha)-->
    <q-drawer v-model="sideMenuOpen" show-if-above bordered>
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
import EssentialLink from "components/EssentialLink.vue";
import { useRouter } from "vue-router";
import { linksList } from "../router/link-list";
import useUI from "../composables/useUI";

const router = useRouter();
const { sideMenuOpen, toggleSideMenu } = useUI();

defineOptions({
  name: "MainLayout",
});

const navigateHome = () => {
  router.push("/");
};
</script>
