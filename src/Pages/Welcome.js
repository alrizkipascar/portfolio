import Cards from "./component/Cards";
import image from "../Image/orange.jpg";
import CarouselText from "./component/carousel-text";
// import image from "../Image/background.jpg";
const Welcome = ({ welcome, Animasection }) => {
  // console.log("test", document.querySelectorAll("[data-replace]"));
  // document.addEventListener("DOMContentLoaded", function () {
  // setTimeout(function () {
  //   var replacers = document.querySelectorAll("[data-replace]");
  //   console.log("replacer", replacers);
  //   for (var i = 0; i < replacers.length; i++) {
  //     let replaceClasses = JSON.parse(
  //       replacers[i].dataset.replace.replace(/'/g, '"')
  //     );
  //     Object.keys(replaceClasses).forEach(function (key) {
  //       replacers[i].classList.remove(key);
  //       replacers[i].classList.add(replaceClasses[key]);
  //     });
  //   }
  // }, 200);
  // }); bg-gradient-to-b from-blue-900 to-blue-600
  const CarouselData = [
    {
      text: "Web & Mobile Development (React)",
    },
    {
      text: "Back end development",
    },
    {
      text: "Data Science",
    },
    {
      text: "Machine Learning",
    },
  ];
  return (
    <div
      ref={welcome}
      className="w-full bg-zinc-900 border-b border-slate-700 text-white items-center justify-center flex h-screen "
    >
      <div
        data-class-in="translate-y-0 opacity-1"
        data-class-out="translate-y-32 opacity-0"
        className="translate-y-32 opacity-0 w-full transition transform duration-500   text-base font-light text-center font-sans leading-relaxed mt-0 mb-4"
      >
        <CarouselText Animasection={Animasection} data={CarouselData} />
      </div>
    </div>
  );
};

export default Welcome;
