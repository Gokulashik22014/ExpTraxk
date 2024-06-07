import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import ChartContainer from "../components/ChartContainer";

import Box from "../components/Box";
import DataContainer from "../components/DataContainer";
import EvsPChart from "../components/EvsPChart";
import Label from "../components/Label";
import { StorageContext } from "../context/StorageProvider";

function Home() {
  const {user,profitExpenseData}=useContext(StorageContext) 
  return (
      <div className="flex flex-row justify-between my-7 p-3">
        {/* right part */}
        <div className="w-2/5 mr-8">
          <h1 className="text-bold text-white text-2xl ">Welcome <span className="uppercase font-bold">{user?.username}</span></h1>
          {/* content */}
          <div>
            <ChartContainer />
            <EvsPChart/>
          </div>
        </div>
        {/* middle part */}
        <div className="flex flex-col mt-12 mr-3">
          <div className="flex">
            <Box title={"This Month"} profit={profitExpenseData.monthProfit} loss={profitExpenseData.monthExpense} />
            <Box title={"Today"} profit={profitExpenseData.todayProfit} loss={profitExpenseData.todayExpense} />
          </div>
          <div>
            <Label/>
          </div>
          </div>
        {/* left part */}
        <div className="w-1/3 mx-1">
          <DataContainer/>
        </div>
      </div>
  );
}

export default Home;
