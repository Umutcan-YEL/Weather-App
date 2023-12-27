import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./services/i18next/18n.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./services/redux/store.tsx";
import { Provider } from "react-redux";
import "./services/i18next/18n.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
