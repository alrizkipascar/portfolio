import logo from "./logo.svg";
import "./App.css";
import Experience from "./Pages/Experience";
import Welcome from "./Pages/Welcome";
import SinglePage from "./Pages/SinglePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Pages/component/Nav";
import Animasection from "./Pages/component/animation";
import { useState } from "react";

function App() {
  const data = () => {
    return (
      <svg
        class="text-black animate-spin h-5 w-5 mr-3 ..."
        viewBox="0 0 24 24"
      ></svg>
    );
  };

  const [page, setPage] = useState(data);

  const pages = () => {
    return <SinglePage Animasection={Animasection} />;
  };

  setTimeout(() => {
    setPage(pages);
  }, 1000);
  return (
    // <Router>
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    <div className="w-full h-auto">
      {page}
      {/* <SinglePage Animasection={Animasection} /> */}
    </div>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
    // </Router>
  );
}

export default App;
