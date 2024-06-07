import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

function useLabels() {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: label = [] } = useQuery({
    queryKey: ["getlabels"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/label/getlabels");
      return res.data.result;
    },
  });
  return [label,refetch]
}

export default useLabels;
