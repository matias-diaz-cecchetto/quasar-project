<!-- TableComponent.vue -->
<template>
  <q-table :rows="rows" :columns="columns" row-key="name">
    <template v-slot:body-cell-acctions="props">
      <q-td :props="props">
        <q-btn label="Edit" @click="editRow(props.row)" color="primary" />
        <q-btn label="Delete" @click="deleteRow(props.row)" color="negative" />
      </q-td>
    </template>
  </q-table>
</template>

<script setup>
const props = defineProps({
  rows: Array,
  columns: Array,
});

const emit = defineEmits(["edit", "delete"]);

const editRow = (row) => {
  // Emitimos el evento al padre con los datos de la fila
  emit("edit", row);
};

const deleteRow = (row) => {
  // Emitimos el evento al padre con los datos de la fila
  emit("delete", row);
};
</script>

<style scoped></style>
