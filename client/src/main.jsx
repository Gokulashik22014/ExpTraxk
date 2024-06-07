import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./Pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import RegisterPage from "./Pages/RegisterPage";
import History from "./Pages/History";
import MainTemplate from "./template/MainTemplate";
import { elements } from "chart.js";
import StorageProvider from "./context/StorageProvider";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "content",
    element: <MainTemplate />,
    children: [
      { path: "home", element: <Home /> },
      { path: "history", element: <History /> },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
      <StorageProvider>
          <RouterProvider router={router} />
      </StorageProvider>
    </QueryClientProvider>
);
