import { useState } from "react";
import Cards from "./component/Cards";
import Slides from "./component/skill-slide";

const Skills = ({ skills }) => {
  const [currentSlide, setcurrentSlide] = useState({
    index: null,
    style: "hidden",
    boxStyle: null,
  });
  const [boxStyle, setBoxStyle] = useState("");
  const CarouselData = [
    {
      text: "Web & Mobile Development (React)",
      description:
        "I really interested in react js framework, it feels neat to code website or janky(lol) android/ios apps also for some reason comparing with other framework like laravel and vue, the structure for react js is easily to learn, also I have 1,5 year experience using react.",
    },
    {
      text: "Back end development",
      description:
        "I have 1 year experience with laravel and firebase, for me laravel is a good REST API backend tools for medium scale of project, it is really easy to implement and deploy, every beginer must try it at least once. For firebase, it is really good for big project but the user really needs to implement effective code to lower the cost.",
    },
    {
      text: "Data Science",
      description:
        "Half year experience and I focusing/majoring data science in university, I like the idea of data exploration so we can gain insight from it, learn the data learn the truth.",
    },
    {
      text: "Machine Learning",
      description:
        "As you can see, I have certificate that focused on machine learning and deep learning, I really interested in learning building model, especially in NLP.",
    },
  ];

  const onClose = (data) => {
    var newIndex = null;
    var newStyle = "hidden";
    setcurrentSlide({ index: newIndex, style: newStyle });
  };
  const onNext = (data) => {
    var newIndex = null;
    var newStyle = null;
    if (currentSlide?.index == CarouselData?.length - 1) {
      newIndex = 0;
    } else {
      newIndex = data + 1;
    }

    newStyle = "opacity-0 -translate-x-1/4 ";
    setBoxStyle(newStyle);

    setTimeout(() => {
      newStyle = "opacity-0 translate-x-2/4 ";

      setBoxStyle(newStyle);
      setcurrentSlide({ index: newIndex });
    }, 600);
    setTimeout(() => {
      newStyle = "opacity-100 translate-x-0";
      setBoxStyle(newStyle);
    }, 800);
  };
  const onPrev = (data) => {
    var newIndex = null;
    var newStyle = null;
    if (currentSlide?.index == 0) {
      newIndex = CarouselData?.length - 1;
    } else {
      newIndex = data - 1;
    }

    newStyle = "opacity-0 translate-x-1/4 ";
    setBoxStyle(newStyle);

    setTimeout(() => {
      newStyle = "opacity-0 -translate-x-2/4 ";

      setBoxStyle(newStyle);
      setcurrentSlide({ index: newIndex });
    }, 600);
    setTimeout(() => {
      newStyle = "opacity-100  translate-x-0";
      setBoxStyle(newStyle);
    }, 800);
  };

  const actionButton = (index) => {
    let newIndex = null;
    let newStyle = null;
    if (currentSlide?.index == null) {
      newIndex = index;
      newStyle = "opacity-0 h-0 translate-y-32 ";
      setcurrentSlide({ index: newIndex, style: newStyle });
      newStyle = "opacity-100 h-auto translate-y-0";
      setTimeout(() => {
        setcurrentSlide({ index: newIndex, style: newStyle });
      }, 150);
    }
    if (currentSlide?.index != null && currentSlide?.index < index) {
      newIndex = index;
      newStyle = "opacity-0 -translate-x-1/4 ";
      setBoxStyle(newStyle);

      setTimeout(() => {
        newStyle = "opacity-0 translate-x-2/4 ";

        setBoxStyle(newStyle);
        setcurrentSlide({ index: newIndex });
      }, 600);
      setTimeout(() => {
        newStyle = "opacity-100 translate-x-0";
        setBoxStyle(newStyle);
      }, 800);
    }
    if (currentSlide?.index != null && currentSlide?.index > index) {
      newIndex = index;

      newStyle = "opacity-0 translate-x-1/4 ";
      setBoxStyle(newStyle);

      setTimeout(() => {
        newStyle = "opacity-0 -translate-x-2/4 ";

        setBoxStyle(newStyle);
        setcurrentSlide({ index: newIndex });
      }, 600);
      setTimeout(() => {
        newStyle = "opacity-100  translate-x-0";
        setBoxStyle(newStyle);
      }, 800);
    }
  };
  return (
    <div ref={skills} className="   bg-zinc-900 w-full sm:h-auto text-white">
      <div className="text-2xl font-sans text-zinc-500 mx-auto w-32 h-auto border-t-4 text-center">
        Focus
        {/* {currentSlide?.index == 0 || currentSlide?.index == 1 ? "About" : currentSlide?.index == 2 ? "Education" : "Certificate"} */}
      </div>
      <div className="items-center px-16 py-20 justify-center mx-auto w-3/4 lg:w-2/4  grid grid-cols-2 py-5 gap-6">
        {CarouselData?.map((index, i) => {
          return (
            <>
              <button className="grid">
                <Cards.Skills
                  actionButton={actionButton}
                  activeIndex={currentSlide?.index}
                  data={index}
                  indexData={i}
                ></Cards.Skills>
              </button>
            </>
          );
        })}

        {/* <Cards.Skills className="grid"></Cards.Skills>
        <Cards.Skills className="grid"></Cards.Skills>
        <Cards.Skills className="grid"></Cards.Skills> */}
      </div>
      <div className={`${currentSlide?.style} transform duration-500 `}>
        <div className={`${currentSlide?.style}  transform duration-500`}></div>
        <Slides
          data={CarouselData}
          onClose={onClose}
          stylesSlide={boxStyle}
          indexData={currentSlide?.index}
          onNext={onNext}
          onPrev={onPrev}
          actionButton={actionButton}
        />
      </div>
    </div>
  );
};

export default Skills;
