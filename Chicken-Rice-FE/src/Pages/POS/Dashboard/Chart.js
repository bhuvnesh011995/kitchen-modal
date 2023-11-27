import ReactApexChart from 'react-apexcharts';

export default function Chart() {
    const series = [
        {
          name: "Sales",
          data: [46, 57, 59, 54, 62, 58, 64, 60, 66],
        },
        {
          name: "Purchase",
          data: [-74, -83, -102, -97, -86, -106, -93, -114, -94],
        },
      ];
      const options = {
        chart: {
          toolbar: {
            show: false,
            type: 'bar',
          height: 350,
            stacked: true,
          },
          
          type: 'bar',
          height: 350,
            stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
    
        colors: ["#34c38f", "#f46a6a"],
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        legend: {
          position: 'top',
        },
        grid: {
          borderColor: "#f1f1f1",
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      };


    return (
        <ReactApexChart options={options} series={series} type="bar" height={350} />
    )
};
