<!-- Componente de vue -->
<template>
  <q-page class="flex column q-pa-lg">
    <!-- <h1>typography.vue</h1> -->
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <q-separator class="q-my-md" />

    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>

    <q-separator class="q-my-md" />

    <p class="text-body1">
      Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </p>
    <p class="text-body2">
      Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </p>

    <q-separator class="q-my-md" />

    <span class="text-weight-thin">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </span>
    <span class="text-weight-light">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </span>
    <span class="text-weight-regular">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </span>
    <span class="text-weight-medium">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </span>
    <span class="text-weight-bold">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </span>
    <span class="text-weight-bolder">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </span>

    <q-separator class="q-my-md" />

    <q-btn
      @click="toggleSideMenu"
      color="primary"
      :label="sideMenuOpen ? 'Cerrar menu' : 'Abrir menu'"
      class="q-mt-ms"
    >
    </q-btn>
  </q-page>
</template>

<script setup>
import useUI from "../composables/useUI";

defineOptions({
  name: "TypographyPage",
});

const { sideMenuOpen, toggleSideMenu } = useUI();
</script>
