import ReactApexChart from 'react-apexcharts'

const options = {
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 1,
  },
  fill: {
    type: 'gradient',
  },
  colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00.000Z',
      '2018-09-19T01:30:00.000Z',
      '2018-09-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-09-19T04:30:00.000Z',
      '2018-09-19T05:30:00.000Z',
      '2018-09-19T06:30:00.000Z',
    ],
  },
  tooltip: {
    x: {
      // format: 'dd/MM/yy HH:mm',
      format: 'dd/MM',
    },
  },
}
const series = [
  {
    name: 'Faturamento',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'Devoluções',
    data: [11, 32, 45, 32, 34, 52, 41],
  },
  {
    name: 'Pedidos',
    data: [50, 60, 28, 72, 69, 150, 135],
  },
]

export default function Chart() {
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  )
}
