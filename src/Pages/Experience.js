// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cards from "./component/Cards";
import Modal from "./component/Modal";
import Animasection from "./component/animation";
import Accordions from "./component/accordion";

const Experience = ({ experience }) => {
  // const history = useNavigate();
  useEffect(() => {
    return () => {
      Animasection.observeAll();
    };
  }, []);

  const [showModal, setShowModal] = useState({});
  // const [dataIndex, setDataIndex] = useState(null);

  // function handleClick() {
  //   history("/home");
  // }
  const data = [
    {
      id: 1,
      name: "experience 1",
      photo: "lol",
      description: "china slave for 2 month",
    },
    {
      id: 2,
      name: "experience 2",
      photo: "lol",
      description: "china slave for 2 month",
    },
    {
      id: 3,
      name: "experience 3",
      photo: "lol",
      description: "china slave for 2 month",
    },
    {
      id: 4,
      name: "experience 4",
      photo: "lol",
      description: "china slave for 2 month",
    },
  ];
  const Modals = ({ data, showModal, setShowModal }) => {
    // setTimeout(() => {
    return (
      <Modal
        data={data}
        showModal={showModal}
        setShowModal={setShowModal}
      ></Modal>
    );
    // });
  };
  return (
    <div
      ref={experience}
      className="w-full h-screen text-white bg-zinc-900 px-6 py-20"
    > 
    <div className="text-2xl font-sans text-zinc-500 mx-auto w-32 h-auto border-t-4  my-8 text-center">
    Experience
    {/* {currentSlide?.index == 0 || currentSlide?.index == 1 ? "About" : currentSlide?.index == 2 ? "Education" : "Certificate"} */}
    </div>
    
      <div className="py-5 gap">
        <Accordions></Accordions>
        {/* {data.map((index, i) => {
          return (
            <>
              <Cards.Experience
                data={index}
                className=""
                setShowModal={setShowModal}
              ></Cards.Experience>
              <Modals
                data={showModal.data}
                showModal={showModal.modal}
                setShowModal={setShowModal}
              ></Modals>

             
            </>
          );
        })} */}
      </div>
    </div>
  );
};

export default Experience;
