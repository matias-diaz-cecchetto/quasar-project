<template>
  <div class="q-pa-md q-mt-md">
    <!-- <q-btn @click="toggleChartType">Toggle Line Chart Type</q-btn> -->
    <!-- <div class="flex-container"> -->
    <div class="row q-mb-md justify-around">
      <div class="col-12 col-sm-6 col-md-4 chart-container">
        <apexchart
          :options="barChartOptions"
          :series="barChartSeries"
        ></apexchart>
      </div>
      <div class="col-12 col-sm-6 col-md-4 chart-container">
        <apexchart
          :options="lineChartOptions"
          :series="lineChartSeries"
        ></apexchart>
      </div>
      <div class="col-12 col-sm-6 col-md-4 chart-container">
        <apexchart
          :options="areaChartOptions"
          :series="areaChartSeries"
        ></apexchart>
      </div>
      <div class="col-12 col-sm-6 col-md-4 chart-container">
        <apexchart
          :options="pieChartOptions"
          :series="pieChartSeries"
        ></apexchart>
      </div>
      <div class="col-12 col-sm-6 col-md-4 chart-container">
        <apexchart
          :options="donutChartOptions"
          :series="donutChartSeries"
        ></apexchart>
      </div>

      <div class="col-12 col-sm-6 col-md-4 chart-container">
        <apexchart
          :options="scatterChartOptions"
          :series="scatterChartSeries"
        ></apexchart>
      </div>
      <div class="col-12 col-sm-6 col-md-4 chart-container">
        <apexchart
          :options="radarChartOptions"
          :series="radarChartSeries"
        ></apexchart>
      </div>
      <div class="col-12 col-sm-6 col-md-4 chart-container">
        <apexchart
          :options="candlestickChartOptions"
          :series="candlestickChartSeries"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "GraphicPage",
});

import { ref } from "vue";

// Propiedad reactiva para el tipo de gráfico de líneas
// const lineChartType = ref("line");

// Bar
const barChartOptions = ref({
  chart: {
    id: "bar-chart",
    type: "bar",
  },
  xaxis: {
    categories: ["Apple", "Banana", "Orange", "Grapes", "Mango"],
  },
  title: {
    text: "Fruit Sales (Bar Chart)",
    align: "center",
  },
});

const barChartSeries = ref([
  {
    name: "Sales",
    data: [30, 40, 45, 50, 49],
  },
]);

// Line
const lineChartOptions = ref({
  chart: {
    id: "line-chart",
    type: "line",
  },
  xaxis: {
    categories: ["Apple", "Banana", "Orange", "Grapes", "Mango"],
  },
  title: {
    text: "Fruit Sales (Line Chart)",
    align: "center",
  },
});

const lineChartSeries = ref([
  {
    name: "Sales",
    data: [30, 40, 45, 50, 49],
  },
]);

// Area
const areaChartOptions = ref({
  chart: {
    type: "area",
  },
  xaxis: {
    categories: ["Apple", "Banana", "Orange", "Grapes", "Mango"],
  },
  title: {
    text: "Sales Over Months (Area Chart)",
    align: "center",
  },
});

// Datos para el gráfico de áreas
const areaChartSeries = ref([
  {
    name: "Sales",
    data: [30, 40, 45, 50, 49],
  },
]);

// Torta
const pieChartOptions = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Fruit Sales (Pie Chart)",
    align: "center",
  },
  labels: ["Apple", "Banana", "Orange", "Grapes", "Mango"], // Etiquetas para cada parte del gráfico
};

// Datos para el gráfico circular
const pieChartSeries = ref([30, 40, 45, 50, 49]); // Valores correspondientes a las etiquetas

// Gráfico de Donut (Donut Chart)
const donutChartOptions = {
  chart: {
    type: "donut",
  },
  title: {
    text: "Fruit Sales (Pie Chart)",
    align: "center",
  },
  labels: ["Apple", "Banana", "Orange", "Grapes", "Mango"],
};

const donutChartSeries = ref([30, 40, 45, 50, 49]);

// Gráfico de Dispersión
const scatterChartOptions = {
  chart: {
    type: "scatter",
  },
  xaxis: {
    type: "numeric",
  },
  title: {
    text: "Fruit Sales (Pie Chart)",
    align: "center",
  },
};
const scatterChartSeries = ref([
  {
    name: "Scatter Series",
    data: [
      [16, 10],
      [34, 20],
      [45, 30],
    ],
  },
]);

// Gráfico de Radar (Radar Chart)
const radarChartOptions = {
  chart: {
    type: "radar",
  },
  title: {
    text: "Fruit Characteristics (Radar Chart)",
    align: "center",
  },
  xaxis: {
    categories: ["Sweetness", "Sourness", "Juiciness", "Fiber", "Crunchiness"],
  },
};

// Datos para el gráfico de radar
const radarChartSeries = ref([
  {
    name: "Apple",
    data: [80, 40, 90, 70, 60],
  },
  {
    name: "Banana",
    data: [90, 30, 85, 50, 70],
  },
  {
    name: "Orange",
    data: [70, 60, 95, 40, 50],
  },
]);

//  Gráfico de Velas (Candlestick Chart)
const candlestickChartOptions = {
  chart: {
    type: "candlestick",
  },
  title: {
    text: "Fruit Prices Over Time (Candlestick Chart)",
    align: "center",
  },
  xaxis: {
    type: "datetime",
    labels: {
      format: "MMM dd", // Formato para mostrar la fecha
    },
  },
  yaxis: {
    title: {
      text: "Price (USD)",
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
};

// Datos para el gráfico de velas
const candlestickChartSeries = ref([
  {
    name: "Apple Prices",
    data: [
      [new Date("2023-01-01").getTime(), 10, 12, 8, 11], // [Fecha, Apertura, Cierre, Mínimo, Máximo]
      [new Date("2023-01-02").getTime(), 11, 13, 10, 12],
      [new Date("2023-01-03").getTime(), 12, 15, 11, 14],
      [new Date("2023-01-04").getTime(), 14, 13, 12, 15],
      [new Date("2023-01-05").getTime(), 13, 14, 11, 13],
    ],
  },
  {
    name: "Banana Prices",
    data: [
      [new Date("2023-01-01").getTime(), 8, 10, 7, 9],
      [new Date("2023-01-02").getTime(), 9, 12, 8, 11],
      [new Date("2023-01-03").getTime(), 10, 11, 9, 10],
      [new Date("2023-01-04").getTime(), 11, 14, 10, 13],
      [new Date("2023-01-05").getTime(), 12, 15, 11, 14],
    ],
  },
]);

const toggleChartType = () => {
  // Cambia el tipo de gráfico de línea entre 'line' y 'area'
  lineChartType.value = lineChartType.value === "line" ? "area" : "line";
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.chart-container {
  width: 45%; /* Ajusta el ancho según sea necesario */
}
</style>
