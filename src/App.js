import logo from "./logo.svg";
import "./App.css";
import Experience from "./Pages/Experience";
import Welcome from "./Pages/Welcome";
import SinglePage from "./Pages/SinglePage";
import { Router } from "react-router-dom";
import Nav from "./Pages/component/Nav";

function App() {
  return (
    // <Router>
    <div className="w-full h-auto">
        

      <SinglePage />
    </div>
    // </Router>
  );
}

export default App;