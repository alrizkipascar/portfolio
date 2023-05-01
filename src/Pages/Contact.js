import Cards from "./component/Cards";
import image from "../Image/unavailable.jpg";
import git from "../Image/github.png";
import LinkedIn from "../Image/linkedin.png";
import email from "../Image/email.png";
import { Link } from "react-router-dom";
// import { LinkedIn, Email,GitHub } from "@mui/icons-material";

const Contact = ({ contact }) => {
  function copyText(){
    navigator.clipboard.writeText("alrizkipasca99@gmail.com")
    alert("Email copied to clipboard alrizkipasca99@gmail.com" );
  }
  return (
    <div
      ref={contact}
      className=" items-center justify-center bg-zinc-900 w-full h-screen text-white px-16 py-20"
    >
      {/* <div className="grid grid-cols-2 w-full py-5 border-slate-800 rounded-lg gap-5"> */}
      <div className="mx-auto w-3/4 lg:w-2/4 flex flex-row py-5 gap-5">
    
        
        <a className="duration-500 hover:bg-red-500 relative w-64 h-64 bg-zinc-800 border-zinc-800" href="https://github.com/alrizkipascar" target="_blank" rel="noreferrer">
      

  <div className="absolute inset-0 bg-cover bg-center z-0" >
  <img src={git} className=" object-fill w-full h-full"></img></div>
  <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">Github</div>

          
        </a>
        
        
        
        
        <a href="https://www.linkedin.com/in/alrizkipascar/       " target="_blank" rel="noreferrer" className="duration-500 hover:bg-red-500 relative w-64 h-64 bg-zinc-800 border-zinc-800">

        
<div className="absolute inset-0 bg-cover bg-center z-0" >
<img src={LinkedIn} className=" object-full w-full h-full"></img></div>
<div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl lg:text-6xl text-white font-semibold">LinkedIn</div>

        
      </a>

      <div onClick={() => {copyText()}} className="duration-500 hover:bg-red-500 relative w-64 h-64 bg-zinc-800 border-zinc-800">

        
<div className="absolute inset-0 bg-cover bg-center z-0" >
<img src={email} className=" object-full w-full h-full"></img></div>
<div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">Email</div>

        
      </div>

      


      </div>
    </div>
  );
};

export default Contact;
