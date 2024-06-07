import React, { useContext, useEffect, useState } from "react";
import SmallLabel from "./SmallLabel";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useLabels from "../hooks/useLabels";
import useExpense from "../hooks/useExpense";
import { StorageContext } from "../context/StorageProvider";

ChartJS.register(ArcElement, Tooltip);

function ChartContainer() {
  const {chartData}=useContext(StorageContext)
  const [label, lrefetch] = useLabels();
  const colorData = {
    blue: { backgroundColor: "#3b82f6", borderColor: "#f8fafc" },
    green: { backgroundColor: "#15803d", borderColor: "#f8fafc" },
    indigo: { backgroundColor: "#6366f1", borderColor: "#f8fafc" },
    violet: { backgroundColor: "#7e22ce", borderColor: "#f8fafc" },
    yellow: { backgroundColor: "#f59e0b", borderColor: "#f8fafc" },
    zinc: { backgroundColor: "#71717a", borderColor: "#f8fafc" },
  }
  const [chartDatavalue,setChartDatavalue]=useState([])
  useEffect(()=>{
    chartData && setChartDatavalue(Object.values(chartData))
    console.log(chartData);
  },[chartData])
  const data = {
    labels: [...label.map((content) => content.name)],
    datasets: [
      {
        label: "spent amount🧐",
        data: chartData?[...chartDatavalue]:[1,1,1,1,1,1],
        backgroundColor: [...label.map(content=>colorData[content.color].backgroundColor)],
        borderColor: [...label.map(content=>colorData[content.color].borderColor)],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex  items-center justify-between p-4 space-x-5 bg-black rounded-lg mt-3">
      {/* chart */}
      <div className="w-1/2 h-56 rounded-lg">
        <Doughnut className="mx-auto " data={data} />
      </div>
      {/* labels */}
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {label.map((content, index) => (
          <SmallLabel key={index} color={content.color} name={content.name} />
        ))}
      </div>
    </div>
  );
}

export default ChartContainer;
