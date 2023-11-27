import ReactApexChart from "react-apexcharts"

export default function RadialChart() {
    const series = [86, 36, 50]
  const options = {
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            },
          },
        },
      },
    },

    labels: ["Total Sent", "Reached", "Opened"],
    colors: ["#800000", "#ffa500", "#0acf97"],
  }
    return(
        <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height="380" />
    )
};
