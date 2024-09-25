<!-- Componente de vue -->
<template>
  <q-page class="q-ma-md">
    <span class="text-h4">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-xs q-pt-xl col col-sm-12 col-md-6"
      >
        <q-input
          filled
          v-model="useForm.email"
          label="Correo electronico"
          type="email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es requerido',
            isValidEmail,
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="useForm.password1"
          label="Contraseña"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es requerido',
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="useForm.password2"
          label="Repetir contraseña"
          lazy-rules
          no-error-icon
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es requerido',
            isSamePassword,
          ]"
        />

        <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

        <q-checkbox
          v-model="useForm.conditions"
          label="Acepto terminos y condiciones"
          :style="
            useForm.errorInConditions && !useForm.conditions && 'color:red'
          "
        />

        <div class="row justify-end">
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

defineOptions({
  name: "FormPage",
});

const $quasar = useQuasar();

// const correo = ref(null);
// const password = ref(null);
// const repeat_password = ref(false);
const accept = ref(false);
const useForm = ref({
  email: "",
  password1: "",
  password2: "",
  conditions: false,
  errorInConditions: false,
});

function onSubmit() {
  useForm.value.errorInConditions = false;

  if (!useForm.value.conditions) {
    $quasar.notify({
      message: "Debe de aceptar terminos y condiciones",
      color: "red-10",
      //icon: "announcement",
      position: "top",
      icon: "las la-exclamation-circle",
      actions: [
        {
          icon: "close",
          color: "white",
          round: true,
          handler: () => {
            /* ... */
          },
        },
      ],
    });
    useForm.value.errorInConditions = true;
    return;
  }

  $quasar.notify({
    message: "Login exitoso",
    type: "positive",
    icon: "las la-user-check",
    position: "top-right",
    actions: [
      {
        icon: "close",
        color: "white",
        round: true,
        handler: () => {
          /* ... */
        },
      },
    ],
  });

  console.log(useForm.value);
}

function onReset() {
  useForm.value = {
    email: "",
    password1: "",
    password2: "",
    conditions: false,
    errorInConditions: false,
  };
  /* name.value = null;
  age.value = null;
  accept.value = false; */
}

function isValidEmail(val) {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) || "El correo no parece ser válido";
}

function isSamePassword(val) {
  return val === useForm.value.password1 || "Las contraseñas no son iguales";
}
</script>
