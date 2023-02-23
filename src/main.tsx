import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@router/index";
import { ModalProvider } from "@context/ContextModal";

import "@styles/global.css";
import "@styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main className="bg-black-400 text-gray-400 h-screen">
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </main>
  </React.StrictMode>
);
