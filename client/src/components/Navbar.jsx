import React, { useState, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StorageContext } from "../context/StorageProvider";
function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const timerRef = useRef(null);
  const location=useLocation()
  const {pathname}=location
  const {logout}=useContext(StorageContext)
  const navigate=useNavigate()
  // logout
  const handleLogout=()=>{
    logout()
    navigate("/")
  } 
  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (

    <div className="w-full h-12 bg-xsl-black border-1 flex justify-between text-white p-1">
      <div className="flex items-center space-x-1">
        <div className="w-10 h-10 rounded-full bg-white">
          
        </div>
        <h1 className="font-bold text-lg">ExpTraxk</h1>
      </div>
      <div>
        <h1 className="font-bold text-3xl">Track Your Expense</h1>
      </div>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-white w-10 h-10 rounded-full">
          <img src="/userImg.webp" className="w-10 h-10 rounded-full" alt="User" />
        </div>
        {showDropdown && (
          <div
            className="absolute z-20 right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href={pathname==="/content/history"?"/content/home":"/content/history"} className="block px-4 py-2  text-black hover:bg-gray-200 hover:rounded-md">
              {pathname==="/content/history"?"Home":"History"}
            </a>
            <button onClick={handleLogout} className="block w-full px-4 py-2 text-start text-black hover:bg-gray-200 hover:rounded-md">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
