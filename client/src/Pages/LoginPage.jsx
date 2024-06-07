import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StorageContext } from "../context/StorageProvider";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
function LoginPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const {setUser}=useContext(StorageContext)
  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/user/login",{email,password}).then((response)=>{
      localStorage.setItem("access-token",response.data.token)
      localStorage.setItem("userinfo",JSON.stringify(response.data.userInfo))
      navigate("/content/home");
    }).catch(error=>{
      console.log(error)
      toast.error("User does not exist", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    })
  };
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-900 ">
      <div className="bg-black p-8 rounded-lg w-80 drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]">
        <h2 className="text-2xl text-slate-100 text-center mb-6 uppercase">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block text-gray-400 mb-2">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            required
            className="w-full p-2 mb-4 rounded-md bg-gray-400 border border-gray-600"
          />

          <label htmlFor="password" className="block text-gray-400 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            required
            className="w-full p-2 mb-4 rounded-md bg-gray-400 border border-gray-600"
          />

          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2 rounded-md mt-4 hover:bg-slate-800 trans"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-400">
            Register
          </Link>
        </p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
