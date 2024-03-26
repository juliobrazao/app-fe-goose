import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./contexts/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
