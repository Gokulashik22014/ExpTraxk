import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";

import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useLabels from "../hooks/useLabels";
function Label() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("green");
  const axiosSecure=useAxiosSecure()
  const [label,refetch]=useLabels()
  const [count, setCount] = useState(label?label.count:0);


  const addlabel = async () => {
    console.log(color, name);
    await axiosSecure
      .post("/api/label/addlabel", { name, color })
      .then((res) => console.log("successfully added"))
      .catch((err) => console.log("err in add label" + err));
    refetch()
    setCount(label.count)
  };
  const deletelabel = async (id) => {
    await axiosSecure
      .post(`/api/label/deletelabel/${id}`)
      .then((res) => console.log("successfully deleted"))
      .catch((err) => console.log("err in delete label" + err));
    refetch()
    setCount(label.count)
  };
  return (
    <div className="bg-black mt-3 rounded-lg p-2">
      <h1 className="text-white text-xl">Label Editing</h1>
      <div className="flex flex-col space-y-2 items-center mt-1">
        {label.map(
          (data, index) => (
            <div key={data._id} className="bg-white rounded-full w-36 h-6 p-2 flex justify-between items-center space-x-3">
              <div className={`bg-${data.color} w-4 h-4 rounded-full`}></div>
              <h1>{data.name}</h1>
              <button onClick={()=>deletelabel(data._id)}>
                <IoMdTrash className="text-red-600" />
              </button>
            </div>
          )
        )}
      </div>
      {count === 6 ? (
        ""
      ) : (
        <div className="flex py-2 px-3 items-center justify-between bg-white rounded-lg mt-3">
          <select
            className={`w-4 h-4 rounded-full p-2 bg-${color}`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            {["zinc", "blue", "indigo", "yellow", "green", "violet"].map(
              (color,index) => (
                <option
                  key={index}
                  value={color}
                  className={`bg-${color} w-4 h-4 rounded-full `}
                ></option>
              )
            )}
          </select>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Title"
          />
          <button
            onClick={addlabel}
            className="bg-slate-900 text-white text-center px-3 py-1 mt-1 rounded-full"
          >
            ADD
          </button>
        </div>
      )}
    </div>
  );
}

export default Label;
