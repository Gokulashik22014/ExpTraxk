import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

function useExpense() {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: expense = [] } = useQuery({
    queryKey: ["getexpenses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/expense/getexpenses");
      // console.log(res);
      return res.data.result;
    },
  });
  return [expense,refetch]
}

export default useExpense;
