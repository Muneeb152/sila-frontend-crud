<!-- src/components/ChartDisplay.vue -->

<template>
  <div>
    <h2>Chart Display</h2>
    <div>
      <button @click="showBarChart">Show Bar Chart</button>
      <button @click="showPieChart">Show Pie Chart</button>
    </div>
    <div v-if="currentChart === 'bar'">
      <canvas ref="barChart"></canvas>
    </div>
    <div v-if="currentChart === 'pie'">
      <canvas ref="pieChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      currentChart: null,
    };
  },
  methods: {
    showBarChart() {
      this.currentChart = 'bar';
      this.renderBarChart();
    },
    showPieChart() {
      this.currentChart = 'pie';
      this.renderPieChart();
    },
    renderBarChart() {
      const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      const ctx = this.$refs.barChart.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options,
      });
    },
    renderPieChart() {
      const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['red', 'blue', 'yellow'],
          },
        ],
      };

      const ctx = this.$refs.pieChart.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: data,
      });
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
