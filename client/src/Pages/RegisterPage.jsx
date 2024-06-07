import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function RegisterPage() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/register", {
        username,
        email,
        password,
      })
      .then((respose) => {
        console.log(respose);
        toast.error("Successfully created", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Username already exist", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-900 ">
      <div className="bg-black p-8 rounded-lg w-80 drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]">
        <h2 className="text-2xl text-slate-100 text-center mb-6 uppercase">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="block text-gray-400 mb-2">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            name="username"
            required
            className="w-full p-2 mb-4 rounded-md bg-gray-400 border border-gray-600"
          />

          <label htmlFor="email" className="block text-gray-400 mb-2">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            name="email"
            required
            className="w-full p-2 mb-4 rounded-md bg-gray-400 border border-gray-600"
          />

          <label htmlFor="password" className="block text-gray-400 mb-2">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            required
            className="w-full p-2 mb-4 rounded-md bg-gray-400 border border-gray-600"
          />

          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2 rounded-md mt-4"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Already have an account{" "}
          <Link to="/" className="text-indigo-400">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
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

export default RegisterPage;
