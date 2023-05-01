import { useEffect, useState } from "react";
import Cards from "./component/Cards";
import Animasection from "./component/animation"

const About = ({ about }) => {
  const [currentSlide, setcurrentSlide] = useState({index:0, style:"hidden"});
    useEffect(() => {
        return () => {
          Animasection.observeAll();
        };
      }, []);
    // console.log("cur",currentSlide.index)
    // const nextSlide = () => {
    //     let newSlide = currentSlide.index === data.length - 1 ? 0 : currentSlide.index + 1;
    //     setcurrentSlide({index:newSlide, style:"translate-x-32"}); 
    // }

    // const prevSlide  = () => {
    //     let newSlide = currentSlide.index === 0 ? data.length - 1 : currentSlide.index - 1;
    //     setcurrentSlide({index:newSlide, style:"-translate-x-32"} ); 
    // }
    const actionButton = (data) => {
        // data?.target?.checked
        console.log("accordion",data)
        let newIndex = data?.index
        let newStyle = "translate-x-0 opacity-1" 
        // if(data?.info?.target?.checked == true){
            // newIndex = data?.index
            // newStyle = "" 
        // }
        // else{
            // newIndex = 0
            // newStyle = "-translate-x-32" 
        // }
        
        setcurrentSlide({index:newIndex, style:newStyle}); 
        console.log(currentSlide)
    }
  
  return (
    <div
      ref={about}
      className="w-full h-screen grid  bg-zinc-900  py-20"
    >
      <div className="mx-auto  w-2/4 py-5 border-slate-800 rounded-lg gap-5">
      <div className="text-2xl font-sans text-zinc-500 mx-auto w-32 h-auto border-t-4  my-8 text-center">
        {currentSlide?.index == 0 || currentSlide?.index == 1 ? "About" : currentSlide?.index == 2 ? "Education" : "Certificate"}
        </div>
        
        
        <div 
        data-class-in="translate-y-0 opacity-1"
        data-class-out="translate-y-32 opacity-0"
        className={`${currentSlide?.index == 0 || currentSlide?.index == 1 ? "" : "hidden"} translate-y-32 opacity-0 transition transform  duration-700 ease-in-out border-y rounded-lg border-zinc-800`}>
          <p className="font-sans text-lg text-white">
            
            My name Alrizki Pasca Ramadhani, I am a bachelor majoring in computer science from Brawijaya University, 
            interested in analyzing data and learning something new.
          </p>
        </div>


      <div 
       data-class-in="translate-y-0 opacity-1"
       data-class-out="-translate-y-32 opacity-0"
      className={`${currentSlide?.index == 2 ? "" : "hidden"} -translate-y-32 opacity-0 transition transform  duration-700 ease-in-out w-full font-sans text-white border-y rounded-lg border-zinc-800`}>
      <div className="">
      <h1 className="text-lg text-center">Brawijaya University</h1>    
      <ul class="mx-6 list-disc">
        <li>Computer Science | Computational Intelligence</li>
        <li>Area of focus: Software Engineer, Data Analyst, Soft Computing (Fuzzy, ML, etc.), Text Mining</li>
        <li>GPA : 3.3.</li>
        <li>Length of Study: 8 Semester / 4 Years.</li>
        <li>TOEFL : 530</li>
      </ul>
      </div>
      </div>


      
      <div data-class-in="translate-x-0 opacity-1"
       data-class-out="translate-y-32 opacity-0" 
       className={`${currentSlide?.index == 3 ? "" : "hidden"} translate-y-32 opacity-0 transition transform  duration-700 ease-in-out w-full font-sans text-white border-y rounded-lg border-zinc-800`}>
      <div className="">
      <h1 className="text-lg text-center">Certificate</h1>    
      <ul class="mx-6 list-decimal">
        <li>Computer Science | Computational Intelligence</li>
        <li>Area of focus: Software Engineer, Data Analyst, Soft Computing (Fuzzy, ML, etc.), Text Mining</li>
        <li>GPA : 3.3.</li>
        <li>Length of Study: 8 Semester / 4 Years.</li>
        <li>TOEFL : 530</li>
      </ul>
      </div>
      </div>


      </div>

      <div className="grid grid-cols-3 mx-auto w-3/4 lg:w-1/2 h-7 border-slate-500 border ">
      <button onClick={() => actionButton({index:1})} 
      className={`${currentSlide?.index == 0 || currentSlide?.index == 1 ? "" : "hover:bg-red-500"} transition ease-in text-center flex `}>
        <p className={`${currentSlide?.index == 1 || currentSlide?.index == 0 ? "text-red-600" : "text-zinc-300"} w-1/3 `}>1/</p> 
        <p className="w-2/3 text-left text-zinc-700">Who am I?</p>
        
        </button>
      <button onClick={() => actionButton({index:2})} 
      className={`${currentSlide?.index == 2 ? "" : "hover:bg-red-500"} transition ease-in  text-center border-slate-600 border-x h-auto flex `}>
          <p className={`${currentSlide?.index == 2 ? "text-red-600" : "text-zinc-300"} w-1/3 `}>2/</p>
          <p className="w-2/3 text-left text-zinc-700">Education</p>
         
          </button>
      <button onClick={() => actionButton({index:3})} 
      className={`${currentSlide?.index == 3 ? "" : "hover:bg-red-500"} transition ease-in text-center flex `}>
      <p className={`${currentSlide?.index == 3 ? "text-red-600" : "text-zinc-300"} w-1/3 `}>3/</p>
          <p className="w-2/3 text-left text-zinc-700">Certificate</p>
         
        
        </button>
  
      </div>
    </div>
  );
};

export default About;
