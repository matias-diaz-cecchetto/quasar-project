<template>
  <q-page class="q-my-md">
    <q-dialog v-model="showDialog" :maximized="$q.screen.lt.md">
      <q-card class="no-scroll" style="background: gray; min-width: 80vw; min-height: 80vh; width: 100%; height: 100%;">
        <q-bar class="bg-brand-light">
          <h5 class="text-brand-text">{{ title }}</h5>
          <q-space></q-space>
          <q-btn @click="hideDialog" color="white" flat icon="close"></q-btn>
        </q-bar>
        <div class="fit">
          <q-pdfviewer type="html5" :src="src" />
        </div>
      </q-card>
    </q-dialog>

    <div class="q-pa-md q-gutter-sm">
      <q-btn @click="onClick" color="positive" label="Manual de usuario"></q-btn>
    </div>
    <q-separator spaced />

    <!-- Formulario -->
    <div class="row justify-center my-container">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-mt-md my-forms">
        <span class="text-h4 q-ma-md block">Ingrese los datos</span>
        <span class="text-h6 q-ma-md block">Buscar por:</span>

        <div class="q-my-md">
          <q-radio v-model="formData.shape" val="line" color="positive" label="Número CE" />
        </div>

        <q-select class="q-my-md" clearable filled color="purple-12" v-model="formData.model" :options="options" />

        <div class="row q-gutter-md q-mb-md items-center">
          <div class="col-1 q-ma-none" style="width: 125px;">
            <q-select class="q-my-md" v-model="formData.tipo_acta" :options="actas" color="purple-12"
              label="Tipo de Acta" dense outlined />
          </div>

          <div class="col-auto q-my-none"><span> - </span></div>

          <div class="col-2 q-my-none" style="width: 170px;">
            <q-select v-model="formData.selectedYear" :options="years" label="Seleccione un año" outlined use-input
              dense clearable style="width: 100%;" />
          </div>

          <div class="col-auto q-my-none"><span> - </span></div>

          <div class="col-2 q-my-none">
            <q-input v-model="formData.numberValue" type="number" label="Nro. GDE" outlined dense clearable :min="0"
              :max="100" :step="1" style="width: 100%;" />
          </div>

          <div class="col-auto q-my-none"><span> - </span></div>

          <div class="col-4 q-my-none text-left">
            <span class="text-h6">GDESDE-DGRC#MJDH <i class="las la-question-circle"></i></span>
          </div>
        </div>

        <div class="row q-gutter-sm q-mb-md items-start no-wrap">
          <q-btn class="col-9 q-ma-none" label="Validar documento" type="submit" color="positive" />
          <div class="col-auto"></div>
          <q-btn class="col-3 q-ma-none" label="Limpiar" type="reset" color="negative" />
        </div>

      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from 'quasar';

defineOptions({
  name: "ValidadorPage",
});

const $q = useQuasar();
const showDialog = ref(false);
const title = ref("QDialog with QPdfviewer");
const src = ref("https://validaciones.sde.gob.ar/Manual/manual%20validacion%20acta%20final.pdf");

const formData = ref({
  shape: 'line',
  model: null,
  tipo_acta: 'CE',
  selectedYear: null,
  numberValue: null,
});

const actas = ['CE'];
const options = [
  'Acta de Nacimiento', 'Acta de Defuncion', 'Acta de Matrimonio', 'Acta de Unión de Convivencia'
];
const currentYear = new Date().getFullYear();
const startYear = 1980;
const years = Array.from({ length: currentYear - startYear + 1 }, (v, i) => startYear + i).reverse();

function onClick() {
  showDialog.value = true;
}

function hideDialog() {
  showDialog.value = false;
}

function onSubmit() {
  if (!formData.value.model || !formData.value.tipo_acta || !formData.value.selectedYear || !formData.value.numberValue) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Complete todos los campos antes de enviar',
    });
    console.log(formData.value);

  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Formulario enviado',
    });
  }
}

function onReset() {
  formData.value = {
    shape: 'line',
    model: null,
    tipo_acta: 'CE',
    selectedYear: null,
    numberValue: null,
  };
}
</script>

<style scoped>
.my-forms {
  width: 900px;
}
</style>
