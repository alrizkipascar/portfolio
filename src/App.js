import logo from "./logo.svg";
import "./App.css";
import Experience from "./Pages/Experience";
import Welcome from "./Pages/Welcome";
import SinglePage from "./Pages/SinglePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Pages/component/Nav";
import Animasection from "./Pages/component/animation";

function App() {
  return (
    // <Router>
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    <div className="w-full h-auto">
      <SinglePage Animasection={Animasection} />
    </div>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
    // </Router>
  );
}

export default App;
