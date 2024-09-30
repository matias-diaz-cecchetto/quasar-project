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

        <div class="q-pa-md">
          <q-btn-dropdown class="q-btn--transparent" label="Account Settings">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-toggle v-model="mobileData" label="Use Mobile Data" />
                <q-toggle v-model="bluetooth" label="Bluetooth" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                  @click="handleLogout"
                />
              </div>
            </div>
          </q-btn-dropdown>

          <q-btn-dropdown class="q-btn--transparent" :label="locale">
            <q-list>
              <q-item clickable v-close-popup @click="changeLanguage('en-US')">
                <q-item-section>English</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="changeLanguage('es')">
                <q-item-section>Español</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>

        <!-- TODO: <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <!-- Propiedad para el menu lateral -->
    <!-- side="right" (abir sobre la derecha)-->
    <!-- <q-drawer v-model="sideMenuOpen" show-if-above bordered>
      Lista
      <q-list>
        Encabezado de la lista
        <q-item-label header> Essential Links </q-item-label>

        Items de la lista
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-drawer v-model="sideMenuOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>{{ t("menu.essentialLinks") }}</q-item-label>
        <EssentialLink
          v-for="link in translatedLinksList"
          :key="link.title"
          :title="link.title"
          :caption="link.caption"
          :icon="link.icon"
          :link="link.link"
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
import { computed, ref } from "vue";
import { logout } from "../services/auth/authService"; // Importa tu authService
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { sideMenuOpen, toggleSideMenu } = useUI();
const mobileData = ref(false);
const bluetooth = ref(false);
const $q = useQuasar(); // Inicializa Quasar

// Configuración de i18n
const { locale, t } = useI18n();

defineOptions({
  name: "MainLayout",
});

// Enlaces traducidos
const translatedLinksList = computed(() => {
  return linksList.map((link) => ({
    ...link,
    title: t(`links.${link.title}`), // Traducción del título
    caption: t(`captions.${link.caption}`), // Traducción del caption
  }));
});

const navigateHome = () => {
  router.push("/");
};

// Cambio de idioma
const changeLanguage = (lang) => {
  locale.value = lang;
};

// Manejar logout
const handleLogout = () => {
  $q.loading.show({ delay: 400 }); // Muestra el spinner

  logout(router).then(() => {
    $q.loading.hide(); // Oculta el spinner
  });
};
</script>

<style scoped>
.q-btn--transparent {
  box-shadow: none;
  border: none !important;
  background: transparent; /* Asegura que el fondo sea transparente */
}

.q-btn--transparent:hover {
  border: none !important; /* Elimina el borde en hover */
  box-shadow: none;
  background: rgba(
    255,
    255,
    255,
    0.1
  ); /* Cambia el fondo en hover si lo deseas */
}
</style>
