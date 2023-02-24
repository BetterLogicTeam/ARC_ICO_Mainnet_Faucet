import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header_Dashboard from "./Components/Header_DashBoard/Header_Dashboard";
import DashBoard from "./Components/DashBoard_page/DashBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="overlay"></div>

      <Header_Dashboard />
      <DashBoard />
    </div>
  );
}

export default App;
