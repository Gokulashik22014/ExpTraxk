import React from "react";
import { IoMdTrash } from "react-icons/io";
import useExpense from "../hooks/useExpense";
import useAxiosSecure from "../hooks/useAxiosSecure";
function Table() {
  const data = [1, 2, 3, 4, 5];
  const [expense,refetch]=useExpense()
  const axiosSecure=useAxiosSecure()
  const deleteexpense = async (id) => {
    await axiosSecure
      .post(`/api/expense/deleteexpense/${id}`)
      .then((res) => console.log("Successful"))
      .catch((err) => console.log("error in deleteexpense" + err));
    refetch();
  };
  const formatDate=(date)=>{
    const newDate=`${new Date(date).getDate()}-${new Date(date).getMonth()+1}-${new Date(date).getFullYear()}`
    return newDate

  }
  return (
    <div className="bg-black rounded-md border border-white/30 p-4 mt-2">
      <hr className="mx-1" />
      <div className="flex flex-col">
        <div className="flex flex-row justify-between mx-4 text-white bg-zinc-800 px-1 mt-1 rounded-md items-center">
          <div className="w-1/12 border-r-2 border-white px-2 text-center">
            S.No
          </div>
          <div className="w-1/12 border-r-2 border-white px-2 text-center">
            Date
          </div>
          <div className="w-3/12 border-r-2 border-white px-2 text-center">
            Title
          </div>
          <div className="w-2/12 border-r-2 border-white px-2 text-center">
            Price
          </div>
          <div className="w-2/12 border-r-2 border-white px-2 text-center">
            Label
          </div>
          <div className="w-1/12 px-2 text-center">Delete</div>
        </div>
        {expense.map((data,index) => (
          <div
            key={data._id}
            className="flex flex-row justify-between mx-4 text-white bg-zinc-800 px-1 mt-1 rounded-md datas-center"
          >
            <div className="w-1/12 border-r-2 border-white px-2 text-center">
              {index+1}
            </div>
            <div className="w-1/12 border-r-2 border-white px-2 text-center">
              {formatDate(data.createdAt)}
            </div>
            <div className="w-3/12 border-r-2 border-white px-2 text-center">
              {data.name}
            </div>
            <div className="w-2/12 border-r-2 border-white px-2 text-center">
              {data.price}
            </div>
            <div className="flex w-2/12 border-r-2 border-white px-2 text-center items-center justify-center">
              <div className={`bg-${data.color} w-6 h-6 rounded-full`}></div>
            </div>
            <div className="w-1/12 px-2 text-red-600 flex justify-center items-center">
              <button className="hover:text-xl" onClick={()=>deleteexpense(data._id)}><IoMdTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
