import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./entities/Header";
import Footer from "./entities/Footer";
import Landing from "./pages/Landing";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
