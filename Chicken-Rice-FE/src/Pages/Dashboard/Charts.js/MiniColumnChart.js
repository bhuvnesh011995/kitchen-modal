import ReactApexChart from "react-apexcharts";

export default function MiniColumnChart({data,color}) {
    const options = {
        chart: {
            id: "campaign-sent-chart",
            toolbar: {
              show: false, // Hide the chart toolbar
            },
          },
          xaxis: {
            labels: {
              show: false, // Hide x-axis labels
            },
            axisTicks: {
              show: false, // Hide x-axis ticks
            },
            axisBorder: {
              show: false, // Hide x-axis border
            },
          },
          yaxis: {
            labels: {
              show: false, // Hide y-axis labels
            },
          },
          grid: {
            show: false, // Hide the grid lines
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          tooltip: {
            enabled: true,
            custom: function ({ seriesIndex, dataPointIndex, w }) {
              const dataPoint = w.globals.series[seriesIndex][dataPointIndex];
              return `<div class="custom-tooltip">${dataPoint}</div>`;
            },
          },
          dataLabels: {
            enabled: false, // Disable data labels for the bars
          },
          colors: [color]
    }
    return(
        <ReactApexChart options={options} series={data} type="bar"/>
    )
};
