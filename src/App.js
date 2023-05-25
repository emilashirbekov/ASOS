import { ToastContainer } from "react-toastify";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
