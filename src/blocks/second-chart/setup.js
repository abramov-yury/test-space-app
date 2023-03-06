const labels = Array(360).fill(null);

const generateData = (degrees, value) => {

  const arr = Array.from(labels);
  arr[degrees] = value;
  return arr;

};

const datasets = [
  {
    data: generateData(18, 3),
    label: "Расходы",
  },
  {
    data: generateData(58, 4),
    label: "Прибыль",
  },
  {
    data: generateData(80, 2),
    label: "Надбавка №2",
  },
  {
    data: generateData(103, 3),
    label: "Пошлина в такую-то \n структуру",
  },
  {
    data: generateData(257, 4),
    label: "Продажи",
  },
  {
    data: generateData(291, 3),
    label: "Закупка",
  },
  {
    data: generateData(332, 4),
    label: "Налог на ввоз",
  },
];

export { labels, datasets };
