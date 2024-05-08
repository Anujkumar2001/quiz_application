import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import RoutesCom from "./Routes/Routes";
import AuthContextProvider from "./contextapi/authContextProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="relative">
          <Navbar />
          <RoutesCom />
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
