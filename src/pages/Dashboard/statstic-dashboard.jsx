import ReactECharts from "echarts-for-react";

export const StatisticDashboard = () => {
  const option = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "4%",
      right: "4%",
      bottom: "1%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Aprel  2024"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "80%",
        data: [1],
      },
    ],
  };

  return (
    <div className="w-full">
      <ReactECharts option={option} />
    </div>
  );
};
