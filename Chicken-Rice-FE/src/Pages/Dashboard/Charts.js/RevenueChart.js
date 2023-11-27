import ReactApexChart from "react-apexcharts"

export default function RevenueChart() {
    const series = [
        {
          name: "Total Revenue",
          type: "line",
          data: [44000, 55000, 41000, 67000, 22000, 43000, 50000, 41000, 56000, 27000, 43000],
        },
        {
          name: "Total Pipeline",
          type: "area",
          data: [23000, 11000, 22000, 27000, 13000, 22000, 37000, 21000, 44000, 22000, 30000],
        },
      ]
      const options = {
        chart: {
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: [2, 4],
          curve: "smooth",
        },
        colors: ["#f46a6a", "#556ee6"],
    
        fill: {
          opacity: [0.85, 0.25],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: [
            "jan",'feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'
        ],
        markers: {
          size: 0,
        },
        legend: {
          offsetY: 11,
        },
        xaxis: {
          type: "month",
        },
        yaxis: {
          title: {
            text: "Points",
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0)
              }
              return y
            },
          },
        },
        grid: {
          borderColor: "#f1f1f1",
        },
      }
    return(

        <ReactApexChart
        options={options}
        series={series}
        type="line"
        height="350"
      />
    )
};
