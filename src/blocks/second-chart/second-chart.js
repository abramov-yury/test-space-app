import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { labels, datasets } from "./setup.js";

const container = document.querySelector(".second-chart__wrapper-canvas");
const ctx = container.querySelector(".second-chart__canvas");

const pointImage = new Image();
pointImage.src = "../img/icon/point.svg";

const options = {
  layout: {
    padding: {
      top: 10,
      bottom: 10,
      right: 72,
    },
  },
  maintainAspectRatio: false,
  elements: {
    point: {
      backgroundColor: "#E01E2E",
      radius: 8,
      hoverRadius: 8,
      borderWidth: 0,
      hoverBorderWidth: 0,
      pointStyle: [pointImage],
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      formatter (value, context) {

        return context.dataset.label;

      },
      anchor: "center",
      align: "right",
      offset: 13,
      textAlign: "center",
      padding: {
        top: 6,
        right: 16,
        bottom: 5,
        left: 16,
      },
      borderRadius: 5,
      backgroundColor: "#141515",
      color: "#FFFFFF",
      font: {
        family: "PF Agora Sans Pro",
        size: 12,
        weight: 500,
        lineHeight: 1.2,
      },
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 4,
      angleLines: {
        display: false,
      },
      pointLabels: {
        display: false,
      },
      ticks: {
        display: false,
        stepSize: 1,
      },
      grid: {
        circular: true,
      },
    },
  },
};

new Chart(ctx, {
  type: "radar",
  data: { labels, datasets },
  options,
  plugins: [ChartDataLabels],
});
