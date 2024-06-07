import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import useExpense from "../hooks/useExpense";
import useLabels from "../hooks/useLabels";

export const StorageContext = createContext();

function StorageProvider({ children }) {
  const [user, setUser] = useState(null);
  const [expense, refetch] = useExpense();
  // daily expense and monthly expense
  const [profitExpenseData, setProfitExpenseData] = useState({
    todayProfit: 0,
    todayExpense: 0,
    monthProfit: 0,
    monthExpense: 0,
  });
  const [chartData, setChartData] = useState(null)
  // calculate today
  const daily = () => {
    const ob = new Date();
    const today = `${ob.getFullYear()}-${ob.getMonth() + 1}-${ob.getDate()}`;
    const month = `${ob.getFullYear()}-${ob.getMonth() + 1}`;

    let todayProfit = 0;
    let todayExpense = 0;
    let monthProfit = 0;
    let monthExpense = 0;

    // Create a local copy of chartData to accumulate changes
    const newChartData = { ...chartData };

    expense.forEach((element) => {
      const date = new Date(Date.parse(element.createdAt));
      const elementDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      const elementMonth = `${date.getFullYear()}-${date.getMonth() + 1}`;

      if (element.category === "income") {
        if (elementDate === today) {
          todayProfit += Number(element.price);
        }
        if (elementMonth === month) {
          monthProfit += Number(element.price);
        }
      } else {
        if (elementDate === today) {
          todayExpense += Number(element.price);
          // Update local copy of chartData
          newChartData[element.color] = (newChartData[element.color] || 0) + Number(element.price);
          console.log(newChartData,newChartData[element.color]);
        }
        if (elementMonth === month) {
          monthExpense += Number(element.price);
        }
      }
    });

    // Update state after the loop
    setProfitExpenseData({
      todayProfit,
      todayExpense,
      monthProfit,
      monthExpense,
    });
    setChartData(newChartData);
  };
  // calculate mothly
  // calculate yearly
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userinfo")));
    daily();
  }, [expense.length]);

  // logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("access-token");
    localStorage.removeItem("userinfo");
  };

  // get all the expense
  const info = { logout, user, setUser, profitExpenseData,chartData };
  return (
    <StorageContext.Provider value={info}>{children}</StorageContext.Provider>
  );
}

export default StorageProvider;
