import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useExpense from "../hooks/useExpense";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);
function EvsPChart() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [expense, refetch] = useExpense();
  const [profit, setProfit] = useState(new Array(12).fill(0));
  const [loss, setLoss] = useState(new Array(12).fill(0));
  const calculateData = () => {
    const profitData = new Array(12).fill(0);
    const lossData = new Array(12).fill(0);

    expense.forEach((element) => {
      const date = new Date(Date.parse(element.createdAt));
      const thisYear = new Date().getFullYear();
      const month = date.getMonth(); // getMonth() returns month index from 0 (Jan) to 11 (Dec)
      if (date.getFullYear() === thisYear) {
        if (element.category === "income") {
          profitData[month] += Number(element.price);
        } else {
          lossData[month] += Number(element.price);
        }
      }
    });

    setProfit(profitData);
    setLoss(lossData);
  };
  useEffect(() => {
    calculateData();
  }, [expense]);

  const data = {
    labels,
    datasets: [
      {
        label: "Profit",
        data: profit,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Expense",
        data: loss,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true, // Show legend
        position: "bottom", // Position of legend (top, bottom, left, right)
        labels: {
          color: "white", // Color of legend labels
        },
      },
    },
  };
  return (
    <div className="flex flex-col items-center justify-between p-4 space-x-5 bg-black rounded-lg mt-3">
      {/* chart */}
      <h1 className="text-white font-bold">This year</h1>
      <Line options={options} data={data} />
    </div>
  );
}

export default EvsPChart;
