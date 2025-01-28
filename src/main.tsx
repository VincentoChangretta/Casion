import { createRoot } from "react-dom/client";
import "app/styles/index.css";

import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "app/ModalProvider";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ModalProvider>
      <App />
    </ModalProvider>
  </BrowserRouter>
);
