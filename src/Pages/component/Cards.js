import { useEffect, useState } from "react";
import image from "../../Image/unavailable.jpg";
import Animasection from "./animation";

const Experience = ({ data, setShowModal, showModal }) => {
  // const [time, setTime] = useState(null);

  const setModal = (value) => {
    setShowModal(value);
  };
  // setInterval(() => {
  //   if (time >= 100) {
  //     setTime(0);
  //   } else {
  //     setTime(time + 10);
  //   }
  //   // let sacond = new Date().getSeconds();
  // }, 2000);
  // function ticktock() {
  //   for (var i = 0; i < 5; ) {
  //     if (i === 4) {
  //       i = 0;
  //       setTime(i);
  //     } else {
  //       i += 1;
  //       setTime(i);
  //     }
  //   }
  // }
  // console.log("time", time);

  // useEffect(() => {
  //   return () => {
  //     Animasection.observeAll();
  //     // setTime(1);
  //     //   document.addEventListener("DOMContentLoaded", function () {
  //     //     setTimeout(function () {
  //     //       var replacers = document.querySelectorAll("[data-replace]");
  //     //       console.log("replacer", replacers);
  //     //       for (var i = 0; i < replacers.length; i++) {
  //     //         let replaceClasses = JSON.parse(
  //     //           replacers[i].dataset.replace.replace(/'/g, '"')
  //     //         );
  //     //         Object.keys(replaceClasses).forEach(function (key) {
  //     //           replacers[i].classList.remove(key);
  //     //           replacers[i].classList.add(replaceClasses[key]);
  //     //         });
  //     //       }
  //     //     }, 200);
  //     //   });
  //   };
  // }, []);

  return (
    <div
      onClick={() =>
        setShowModal({
          modal: true,
          data: data,
        })
      }
      className="border-t border-slate-700 hover:bg-gray-800 hover:border-slate-600 transition-all ease-out duration-1000 w-full h-60 rounded-lg  text-slate-50 bg-black "
    >
      <div id="default-carousel" class="relative" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
    
    </div>
  );
};
{/* <div
        data-class-in="translate-x-0 opacity-1"
        data-class-out="-translate-x-32 opacity-0"
        className="-translate-x-32 opacity-0 w-full transition transform duration-700 grid grid-cols-3"
      >
        <div className="col-span-1 my-5 mx-5">
          <img src={image} className=" object-fill w-64 h-48"></img>
        </div>
        <div className="col-span-2">{data.name}</div>
      </div> */}
const CardWelcome = ({ children }) => {
  return (
    <div className="border-4 border-slate-50 w-96 h-60 rounded-lg py-5 px-3 mx-20 text-slate-50 bg-gray-700">
      {children}
    </div>
  );
};

const Skills = ({data}) => {
  useEffect(() => {
    return () => {
      Animasection.observeAll();
    };
  }, []);

  return (
    <div className="border-t bg-zinc-800 hover:bg-red-400 hover:border-slate-600 transition-all ease-out duration-1000 w-84 xl:w-96 h-60  text-slate-50 bg-black ">
      {/* {children} */}
      <div
        // data-class-in="translate-y-0 opacity-1 h-auto"
        // data-class-out="translate-y-32 opacity-0 h-0"
        className="h-auto w-full transition transform duration-700"
      >
        {/* <div className="hover:scale-100 ease-in-out hover:duration-150 border-t border-r border-slate-700 hover:bg-gray-800 hover:border-slate-600  w-full h-60 rounded-lg  text-slate-50 bg-black transition duration-1000  hover:-translate-y-1 "> */}
        <div className="w-full h-full">
        <p className="mx-8 text-right text-6xl text-zinc-800">+</p>
          <div className=" mx-6 mt-10 ">
            <h1 className="text-2xl">0{data ? data?.index : 1} /</h1>
            <p className="text-3xl">{data ? data?.title : "Focus"}</p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
    // <div
    //   className="translate-x-32 opacity-0 h-0 w-full transition transform duration-700"
    // >
    //   <div className="hover:scale-100 ease-in-out hover:duration-150 border-t border-r border-slate-700 hover:bg-gray-800 hover:border-slate-600  w-full h-60 rounded-lg  text-slate-50 bg-black transition duration-1000  hover:-translate-y-1 ">
    //     <div className="grid grid-cols-3">
    //       <div className="col-span-2">WWWWWWWWWWWWWWWWW</div>
    //     </div>
    //   </div>
    // </div>
  );
};

const Cards = {
  Experience: Experience,
  CardWelcome: CardWelcome,
  Skills: Skills,
};

export default Cards;
