import React, { useEffect, useRef, useState } from "react";
import Animasection from "./animation"
import styles from './accordion.module.css'; 
const Accordion = ({ data, showModal, setShowModal }) => {
    const [currentSlide, setcurrentSlide] = useState({index:0, style:"hidden"});
    const [CB1, setCB1] = useState({style:"hidden"});
    const [CB2, setCB2] = useState({style:"hidden"});
    const [CB3, setCB3] = useState({style:"hidden"});
    const checkbox = useRef()
    const checkbox2 = useRef()
    const checkbox3 = useRef()
    // useEffect(() => {
    //     return () => {
    //       Animasection.observeAll();
    //     };
    //   }, []);
    // console.log("cur",currentSlide.index)
    // const nextSlide = () => {
    //     let newSlide = currentSlide.index === data.length - 1 ? 0 : currentSlide.index + 1;
    //     setcurrentSlide({index:newSlide, style:"translate-x-32"}); 
    // }

    // const prevSlide  = () => {
    //     let newSlide = currentSlide.index === 0 ? data.length - 1 : currentSlide.index - 1;
    //     setcurrentSlide({index:newSlide, style:"-translate-x-32"} ); 
    // }
    const actionAccordion = (data) => {
        // data?.target?.checked
        console.log("accordion",data,checkbox?.current?.id)
        let newIndex = null
        let newStyle = "" 
        if(data?.info?.target?.checked == true){
          newIndex = data?.index
          newStyle = "opacity-1" 
          if(data?.index == 1){
            setCB1({style:newStyle})
          }
          if(data?.index == 2){
            setCB2({style:newStyle})
          }
          if(data?.index == 3){
            setCB3({style:newStyle})
          }  
          setcurrentSlide({index:newIndex, style:newStyle}); 

        }
        else{
          newIndex = 0
          newStyle = "opacity-0"
          setcurrentSlide({index:newIndex, style:newStyle});
          newStyle = "hidden" 
          setTimeout(() => {setcurrentSlide({index:newIndex,style:newStyle})}, 650)
          
          if(data?.index == 1){
                
                newStyle = "opacity-0"
                setCB1({style:newStyle}) 
                newStyle = newStyle + " hidden" 
                setTimeout(() => {setCB1({style:newStyle})}, 500)
                console.log("timeout",currentSlide)
           
            
          }
          if(data?.index == 2){
            newStyle = "opacity-0"
                setCB2({style:newStyle}) 
                newStyle = newStyle + " hidden" 
                setTimeout(() => {setCB2({style:newStyle})}, 500)
                console.log("timeout",currentSlide)
          }
          if(data?.index == 3){
            newStyle = "opacity-0"
                setCB3({style:newStyle}) 
                newStyle = newStyle + " hidden" 
                setTimeout(() => {setCB3({style:newStyle})}, 500)
                console.log("timeout",currentSlide)
          }  
            
        }
        
    }
    console.log("outside",currentSlide)
  return (
    <div  className="accordion flex flex-col items-center justify-center h-auto">
   
    <div className="w-1/2">
      <input onClick={(i) => actionAccordion({info:i,index:1})} type="checkbox" name="panel" id="panel-1" className="hidden"></input>
      <label  for="panel-1" className="relative block bg-black text-white p-4 shadow border-b border-grey">Badan Pengkajian dan Penerapan Teknologi (BPPT)</label>
      <div className={`${CB1?.style} transition-all transform  duration-500 overflow-hidden bg-grey-lighter`}>
        <h2 className="accordion__header pt-4 pl-4">Intern Data Science - 3 month</h2>
        <p className="px-4" id="panel1">I get the opportunity to help BPPT with tsunami research.</p>
        <ul class="mx-6 list-disc p-4">
        <li>Analyze tsunami data</li>
        <li>Create web crawler to extract data from http://tsun.sscc.ru/nh/tsunami.php</li>
        <li>Cleaning raw data from excel and csv, using Python.</li>
        <li>Length of Study: 8 Semester / 4 Years.</li>
        <li>Create Fuzzy Inference System with Python</li>
      </ul>
      </div>
      
    </div>
    <div className="w-1/2">
      <input  onClick={(i) => actionAccordion({info:i,index:2})} type="checkbox" name="panel" id="panel-2" className="hidden"></input>
      <label for="panel-2" className="relative block bg-black text-white p-4 shadow border-b border-grey">Panel 2</label>
      <div className={`${CB2?.style} transition-all transform  duration-300 overflow-hidden bg-grey-lighter`}>
      {/* <div className={`transition overflow-hidden bg-grey-lighter`}> */}
      
        <h2 className=" pt-4 pl-4">Header</h2>
        <p className=" p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
   
    <div className="w-1/2">
      <input onClick={(i) => actionAccordion({info:i,index:3})} type="checkbox" name="panel" id="panel-3" className="hidden"></input>
      <label  for="panel-3" className="relative block bg-black text-white p-4 shadow border-b border-grey">Panel 3</label>
      <div className={`${CB3?.style} transition-all transform  duration-500 overflow-hidden bg-grey-lighter`}>
        <h2 className=" pt-4 pl-4">Header</h2>
        <p className=" p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Lorem ipsum dolor sit amet.</p>
      </div>
    </div>

    {/* <div className="w-1/2">
    <input onClick={(i) => actionAccordion({info:i,index:4})} type="checkbox" name="panel" id="panel-4" className="hidden"></input>
    <label for="panel-4" className="relative block bg-black text-white p-4 shadow border-b border-grey">Panel 4</label>
    <div className={`transition-all transform  duration-300 overflow-hidden bg-grey-lighter`}>
      
        <h2 className=" pt-4 pl-4">Header</h2>
        <p className=" p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Lorem ipsum dolor sit amet.</p>
      </div>
    </div> */}


  </div>

  );
};

export default Accordion;

