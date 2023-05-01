import logo from "./logo.svg";
import "./App.css";
import Experience from "./Pages/Experience";
import Welcome from "./Pages/Welcome";
import SinglePage from "./Pages/SinglePage";
import { Router } from "react-router-dom";
import Nav from "./Pages/component/Nav";
import Animasection from "./Pages/component/animation";
import { useRef } from "react";

function App() {

  const welcome = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);
  const arrayPage = [
    { welcome: welcome },
    { about: about },
    { experience: experience },
    { skills: skills },
    { contact: contact },
  ];

  const scrollToPage = (id) => {
    for (let i in arrayPage) {
      if (arrayPage[i][id]) {
        Animasection.observeAll();

        console.log("test", arrayPage[i][id]);

        arrayPage[i][id].current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    // <Router>
    <div className="w-full h-screen">
      <header className="sticky top-0 z-50 ">
      <Nav scrollToPage={scrollToPage}/>
      </header>
      <div className="=overflow-y-hidden sm:h-auto">
      <SinglePage welcome={welcome} 
      about={about}
      experience={experience} 
      skills={skills} 
      contact={contact} />
    </div>
    </div>
    // </Router>
  );
}

export default App;
import { useEffect, useRef } from "react";
import Nav from "./component/Nav";
import Contact from "./Contact";
import Experience from "./Experience";
import Skills from "./Skills";
import Welcome from "./Welcome";
import About from "./About";
import Animasection from "./component/animation";

function SinglePage({welcome,about,experience,skills,contact}) {
  // const welcome = useRef(null);
  // const about = useRef(null);
  // const experience = useRef(null);
  // const skills = useRef(null);
  // const contact = useRef(null);
  // const arrayPage = [
  //   { welcome: welcome },
  //   { about: about },
  //   { experience: experience },
  //   { skills: skills },
  //   { contact: contact },
  // ];

  useEffect(() => {
    return () => {
      Animasection.observeAll();
    };
  }, []);

  // console.log("welcome", welcome);
  // const scrollToPage = (id) => {
  //   for (let i in arrayPage) {
  //     if (arrayPage[i][id]) {
  //       Animasection.observeAll();

  //       console.log("test", arrayPage[i][id]);

  //       arrayPage[i][id].current?.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // };

  return (
    <div className=" sm:h-auto  bg-black">
      {/* <header className="sticky top-0 z-50 flex justify-center">
        
      
      </header> */}
      {/* <Nav scrollToPage={scrollToPage} /> */}
     
      {/* <div className="h-20 bg-white"></div> */}
   
        {/* <div className="border"> */}{" "}
        
        <Welcome
          welcome={welcome}
          id="welcome"
          name="welcome"
          // ref={welcome}
        ></Welcome>
        {/* </div> */}
        <About about={about}></About>
        <Experience id="experience" experience={experience}></Experience>
        <Skills skills={skills}></Skills>
        <Contact contact={contact}></Contact>
      
     
    </div>
  );
}

export default SinglePage;
