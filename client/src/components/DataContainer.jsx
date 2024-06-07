import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { BiSolidSend } from "react-icons/bi";
import useLabels from "../hooks/useLabels";
import useExpense from "../hooks/useExpense";
import useAxiosSecure from "../hooks/useAxiosSecure";
function DataContainer() {
  const [label, lrefetch] = useLabels();
  const [expense, refetch] = useExpense();
  const axiosSecure = useAxiosSecure();
  const [selected, setSelected] = useState("income");
  const [color, setColor] = useState(
    label.count > 0 ? label[0].color : "green"
  );
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const formatDate=(date)=>{
    const newDate=`${new Date(date).getDate()}-${new Date(date).getMonth()+1}-${new Date(date).getFullYear()}`
    return newDate

  }
  const addexpense = async () => {
    await axiosSecure
      .post("/api/expense/addexpense", {
        name,
        price,
        category: selected,
        color,
      })
      .then((res) => console.log("Successful"))
      .catch((err) => console.log("error in add expense" + err));
    refetch();
    setName("");
    setPrice(0);
    // setColor(label?label[0].color:"green")
  };
  const deleteexpense = async (id) => {
    await axiosSecure
      .post(`/api/expense/deleteexpense/${id}`)
      .then((res) => console.log("Successful"))
      .catch((err) => console.log("error in deleteexpense" + err));
    refetch();
  };
  return (
    <div className="flex flex-col justify-between bg-black drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]  rounded-lg p-2 h-[85vh]">
      <div>
        {/* button */}
        <div className="flex bg-white justify-between py-3 px-6 rounded-full w-2/3 mx-auto">
          <button
            className={`toggle_button ${selected === "income" ? "active" : ""}`}
            onClick={() => setSelected("income")}
          >
            income
          </button>
          <button
            className={`toggle_button ${
              selected === "expense" ? "active" : ""
            }`}
            onClick={() => setSelected("expense")}
          >
            expense
          </button>
        </div>
        {/* container */}
        <div className="flex flex-col items-center">
          {expense != 0 ? (
            expense
              .filter((content) => content.category === selected && formatDate(content.createdAt)===formatDate(new Date()))
              .map((content, index) => (
                <div key={content._id} className="flex justify-between items-center mx-auto bg-zinc-900 pl-3 mt-4 rounded-lg w-4/5 h-8">
                  <div className="flex items-center w-1/3 justify-between">
                    <button onClick={()=>deleteexpense(content._id)} className="hover:text-xl text-red-600 text-lg"><IoMdTrash/></button>
                    <h1
                      className={`${
                        content.category === "income"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {content.price}
                    </h1>
                  </div>
                  <div className="flex items-center w-1/2 justify-between">
                    <h1 className="text-white text-lg uppercase">
                      {content.name}
                    </h1>
                    {content.category === "expense" && (
                      <div
                        className={`bg-${content.color} w-7 h-8 rounded-r-lg`}
                      ></div>
                    )}
                  </div>
                </div>
              ))
          ) : (
            <h1 className="text-white h-8 mt-4">Add your expense here</h1>
          )}
        </div>
      </div>
      {/* input */}
      <div className="flex py-2 px-3 items-center justify-between bg-white rounded-lg mt-3">
        {selected === "income" ? (
          ""
        ) : (
          <select
            className={`w-4 h-4 rounded-full p-2 bg-${color}`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            {label.map((data,index) => (
              <option
                key={index}
                value={data.color}
                className={`bg-${data.color} w-4 h-4 rounded-full `}
              ></option>
            ))}
          </select>
        )}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Price"
        />
        <button className="bg-white text-2xl" onClick={addexpense}>
          <BiSolidSend />
        </button>
      </div>
    </div>
  );
}

export default DataContainer;
