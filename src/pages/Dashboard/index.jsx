import ReactECharts from "echarts-for-react";

export const Dashboard = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1, name: "Readiy" },
          // { value: 735, name: "Direct" },
          // { value: 580, name: "Email" },
          // { value: 484, name: "Union Ads" },
          // { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  return (
    <div className="w-96">
      <ReactECharts option={option}/>
    </div>
  );
};
