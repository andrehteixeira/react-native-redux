import { Routes } from "./src/routes/Routes";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
