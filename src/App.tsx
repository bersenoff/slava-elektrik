import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { YMInitializer } from "react-yandex-metrika";

import Landing from "./pages/Landing";
import TechConditions from "./pages/TechConditions";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ElectricalInstallation from "./pages/ElectricalInstallation";
import ElectricServices from "./pages/ElectricServices";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/vypolnenie-tekhuslovij",
      element: <TechConditions />,
    },
    {
      path: "/montazh-elektriki-pod-klyuch-v-irkutske",
      element: <ElectricalInstallation />,
    },
    {
      path: "/uslugi-elektrika-s-vyezdom-v-irkutske",
      element: <ElectricServices />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
      <YMInitializer
        accounts={[95674050]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        }}
      />
    </>
  );
};

export default App;
