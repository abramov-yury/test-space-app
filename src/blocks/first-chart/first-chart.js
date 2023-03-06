import { Chart } from "chart.js/auto";

const container = document.querySelector(".first-chart__wrapper-canvas");
const ctx = container.querySelector(".first-chart__canvas");

const getGradient = (ctx, chartArea, arr) => {

  const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
  gradient.addColorStop(0, arr[0]);
  gradient.addColorStop(1, arr[1]);

  return gradient;

};

const gridColors = ["rgb(221, 221, 221)", "rgba(221, 221, 221, 0.15)"];

const datasets = [
  {
    type: "line",
    data: {
      2015: 38.2,
      2016: 43.4,
      2017: 49.3,
      2018: 51.6,
      2019: 53.8,
      2020: 56,
    },
  },
  {
    type: "bar",
    data: {
      2015: 0,
      2016: 0,
      2017: 0,
      2018: 0,
      2019: 0,
      2020: 0,
    },
  },
];

const options = {
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 5,
      backgroundColor: "#E01E2E",
      borderColor: "#E01E2E",
      hoverRadius: 5,
    },
    line: {
      borderColor: "#E01E2E",
      borderWidth: 2,
      tension: 0.4,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  layout: {
    padding: {
      left: -24,
      bottom: -30,
    },
  },
  scales: {
    y: {
      border: {
        display: false,
      },
      grid: {
        color: (context) => {

          const { chart } = context;
          const { ctx, chartArea } = chart;
          if (!chartArea) return;

          return getGradient(ctx, chartArea, gridColors);

        },
        lineWidth: 1,
        tickBorderDash: false,
        drawTicks: false,
      },
      ticks: {
        callback (value) {

          return `${value}%`;

        },
        font: {
          family: "PF Agora Sans Pro",
          size: 14,
          weight: 400,
          color: "#999999",
        },
        padding: 28,
      },
      max: 60,
      min: 30,
    },
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: "PF Agora Sans Pro",
          size: 16,
          weight: 700,
          color: "#666666",
        },
        padding: 30,
      },
    },
  },
};

new Chart(ctx, {
  type: "bar",
  data: { datasets },
  options,
});
