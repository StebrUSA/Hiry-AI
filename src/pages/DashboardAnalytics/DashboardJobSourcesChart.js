import React from "react";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";

const JobsSourcesCharts = ({ dataColors }) => {
  var chartDonutBasicColors = getChartColorsArray(dataColors);
  const series = [44, 55, 41, 17, 15];
  var options = {
    labels: ["Direct", "Social", "Email", "Others", "Referrals"],
    chart: {
      height: 333,
      type: "donut",
    },
    legend: {
      position: "bottom",
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      dropShadow: {
        enabled: false,
      },
    },
    colors: chartDonutBasicColors,
  };
  return (
    <React.Fragment>
      <ReactApexChart
        dir="ltr"
        options={options}
        series={series}
        type="donut"
        height="500"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export { JobsSourcesCharts };
