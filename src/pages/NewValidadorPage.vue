<template>
  <div class="q-pa-md full-screen">
    <q-stepper v-model="step" ref="stepper" color="primary" animated class="full-stepper">
      <!-- Primer Paso: Ingresar Datos -->
      <q-step :name="1" title="Ingrese los datos" icon="info" :done="step > 1">
        <span class="text-h6 q-ma-md block">Buscar por:</span>

        <div class="q-my-md">
          <q-radio v-model="formData.shape" val="line" color="positive" label="Número CE" />
        </div>
      </q-step>

      <!-- Segundo Paso: Completar Datos -->
      <q-step :name="2" title="Completar Datos" icon="edit" :done="step > 2">
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
      </q-step>

      <!-- Tercer Paso: Resumen de Datos -->
      <q-step :name="3" title="Resumen" icon="assignment">
        <div>
          <h6>Resumen de Datos Ingresados</h6>
          <p><strong>Tipo de Acta:</strong> {{ formData.tipo_acta }}</p>
          <p><strong>Año Seleccionado:</strong> {{ formData.selectedYear }}</p>
          <p><strong>Nro. GDE:</strong> {{ formData.numberValue }}</p>
        </div>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="navigate(step === 3 ? 'finish' : 'next')" color="primary"
            :label="step === 3 ? 'Finalizar' : 'Continuar'" />
          <q-btn v-if="step > 1" flat color="primary" @click="step--" label="Volver" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Estado del paso actual
const step = ref(1);

// Datos del formulario
const formData = ref({
  shape: 'line',
  tipo_acta: null,
  selectedYear: null,
  numberValue: null,
});

// Opciones para los selects (ejemplo)
const actas = ref(
  [
    'Acta de Nacimiento', 'Acta de Defuncion', 'Acta de Matrimonio', 'Acta de Unión de Convivencia'
  ]
);

const currentYear = new Date().getFullYear();
const startYear = 1980;
const years = Array.from({ length: currentYear - startYear + 1 }, (v, i) => startYear + i).reverse();

// Función para navegar entre pasos
const navigate = (action) => {
  if (action === 'next') {
    step.value++;
  } else if (action === 'finish') {
    // Lógica para finalizar el wizard (por ejemplo, enviar los datos)
    console.log('Finalizando con los datos:', formData.value);
  }
};
</script>

<style scoped>
.full-screen {
  display: flex;
  align-items: center;
  justify-content: center;
}

.full-stepper {
  width: 100%;
  max-width: 1200px;
}
</style>
