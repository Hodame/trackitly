<script setup lang="ts">
import type { ChartData } from 'chart.js';

import { Line } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

const primaryColor = '#2563eb';
const grayColor = '#6b7280';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const data: ChartData<'line'> = {
  labels: [4, 5, 6, 7, 8, 9],
  datasets: [
    {
      backgroundColor: (context) => {
        if (!context.chart.chartArea) return;

        const {
          ctx,
          chartArea: { top, bottom }
        } = context.chart;

        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);

        gradientBg.addColorStop(0, primaryColor);
        gradientBg.addColorStop(0.35, primaryColor)
        gradientBg.addColorStop(1, 'transparent');

        return gradientBg;
      },
      borderColor: primaryColor,
      cubicInterpolationMode: 'monotone',
      data: [1, 5, 7, 2, 3, 2],
      tension: 0.2,
      fill: 1
    }
  ]
};

const options: ChartJS<'line'>['options'] = {
  responsive: true,
  scales: {
    x: {
      backgroundColor: 'transparent',
      border: {
        display: false
      },
      ticks: {
        color: grayColor,
        font: {
          size: 14,
          weight: '600'
        }
      },
      grid: {
        display: false
      }
    },
    y: {
      backgroundColor: '',
      border: {
        display: false
      },
      ticks: {
        color: grayColor,
        font: {
          size: 14,
          weight: '600'
        }
      },
      grid: {
        display: false
      }
    }
  }
};
</script>

<template>
  <BaseBox>
    <h1 class="text-lg font-medium">Total tasks done</h1>
    <p class="text-gray-500">Tasks Completed in last 7 days</p>

    <div class="h-full max-h-96 max-w-xl">
      <Line :data="data" :options="options" />
    </div>
  </BaseBox>
</template>
