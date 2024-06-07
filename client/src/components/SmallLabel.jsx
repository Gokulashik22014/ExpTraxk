import React from "react";
import { IoMdTrash } from "react-icons/io";
function SmallLabel({color,name}) {
  return (
    <div className="bg-white rounded-full w-32 h-6 p-2 flex items-center space-x-3">
      <div className={`bg-${color} w-4 h-4 rounded-full`}></div>
      <h1>{name}</h1>
    </div>
  );
}

export default SmallLabel;
