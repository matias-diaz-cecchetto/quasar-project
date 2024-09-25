<!-- Componente de vue -->
<template>
  <q-page class="q-pa-md">
    <span class="text-h3">Dialogs</span>
    <q-separator spaced />

    <template v-if="name">
      <span class="text-h5">{{ name }}</span>
      <q-separator spaced="" />
    </template>

    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Alert" color="primary" @click="alert" />
      <q-btn label="Confirm" color="primary" @click="confirm" />
      <q-btn label="Prompt" color="primary" @click="prompt" />
    </div>

    <q-separator spaced="" />

    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Radio Options" color="primary" @click="radio" />
      <q-btn label="Checkbox Options" color="primary" @click="checkbox" />
      <q-btn label="Toggle Options" color="primary" @click="toggle" />
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "DialogsPage",
});

import { useQuasar } from "quasar";
import { ref } from "vue";

const $quasar = useQuasar();
const name = ref("");

function alert() {
  $quasar
    .dialog({
      // dark: true,
      title: "Alert",
      message: "Some message",
      color: "deep-purple-10",
    })
    .onOk(() => {
      console.log("OK");
    })
    .onCancel(() => {
      console.log("Cancel");
    })
    .onDismiss(() => {
      // console.log("I am triggered on both OK and Cancel");
    });
}

function confirm() {
  $quasar
    .dialog({
      title: "Confirm",
      message: "Would you like to turn on the wifi?",
      cancel: true,
      persistent: true,
    })
    .onOk(() => {
      console.log(">>>> OK");
    })
    .onOk(() => {
      console.log(">>>> second OK catcher");
    })
    .onCancel(() => {
      console.log(">>>> Cancel");
    })
    .onDismiss(() => {
      // console.log("I am triggered on both OK and Cancel");
    });
}

function prompt() {
  $quasar
    .dialog({
      title: "Prompt",
      message: "What is your name?",
      prompt: {
        model: "",
        type: "text", // optional
      },
      cancel: true,
      persistent: true,
    })
    .onOk((data) => {
      name.value = data;
      console.log(">>>> OK, received", data);
    })
    .onCancel(() => {
      console.log(">>>> Cancel");
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
}

const opciones = [
  { label: "Opción A", value: "a", color: "secondary" },
  { label: "Opción B", value: "b" },
  { label: "Opción C", value: "c" },
];

function radio() {
  $quasar
    .dialog({
      title: "Options",
      message: "Choose an option:",
      options: {
        type: "radio",
        //model: "opt1",
        model: opciones[0].value,
        // inline: true
        items: opciones,
        /* items: [
          { label: "Option 1", value: "opt1", color: "secondary" },
          { label: "Option 2", value: "opt2" },
          { label: "Option 3", value: "opt3" },
        ], */
      },
      cancel: true,
      persistent: true,
    })
    .onOk((data) => {
      console.log(">>>> OK, received", data);
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
}

function checkbox() {
  $quasar
    .dialog({
      title: "Options",
      message: "Choose your options:",
      options: {
        type: "checkbox",
        model: [],
        // inline: true
        items: [
          { label: "Option 1", value: "opt1", color: "secondary" },
          { label: "Option 2", value: "opt2" },
          { label: "Option 3", value: "opt3" },
        ],
      },
      cancel: true,
      persistent: true,
    })
    .onOk((data) => {
      // console.log('>>>> OK, received', data)
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
}

function toggle() {
  $quasar
    .dialog({
      title: "Options",
      message: "Choose your options:",
      options: {
        type: "toggle",
        model: [],
        // inline: true,
        items: [
          { label: "Option 1", value: "opt1", color: "secondary" },
          { label: "Option 2", value: "opt2" },
          { label: "Option 3", value: "opt3" },
        ],
      },
      cancel: true,
      persistent: true,
    })
    .onOk((data) => {
      // console.log('>>>> OK, received', data)
    })
    .onCancel(() => {
      // console.log('>>>> Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
}
</script>
