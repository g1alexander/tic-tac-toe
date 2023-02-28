import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@router/index";
import { ModalProvider } from "@context/ContextModal";

import "@styles/global.css";
import "@styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main className="bg-black-400 text-gray-400 h-screen flex flex-col justify-center items-center">
      <BrowserRouter>
        <ModalProvider>
          <App />
        </ModalProvider>
      </BrowserRouter>
    </main>
  </React.StrictMode>
);
