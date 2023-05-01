import React, { useState } from "react";

const Modal = ({ data, showModal, setShowModal }) => {
  const [cssModal, setCssModal] = useState(
    "translate-y-32 transition-all ease-out duration-500  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  );
  // let cssModal =
  //   "translate-y-32 transition-all ease-out duration-1000  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none";
  let ModalOut =
    "translate-y-0 transition-all ease-out duration-500  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none";
  if (showModal?.modal != false || null) {
    setTimeout(() => {
      setCssModal(ModalOut);
      // cssModal = ModalOut;
      // "translate-y-0 transition-all ease-out duration-1000  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none";

      // showModal?.modal != false
      //   ? "translate-y-0 transition-all ease-out duration-1000  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      //   : "translate-y-32 transition-all ease-out duration-1000  flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none";
    }, 100);
  }

  // const [modal, setShowModal] = useState(false);
  return (
    <>
      {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button> */}
      {showModal ? (
        <>
          <div className={cssModal}>
            <div className="bg-white rounded-lg w-3/4 h-1/2">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div> */}
                <div className="relative p-6 flex-auto">
                  <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <div className="text-black text-sm font-bold">
                      <p>Experience</p>
                      {data?.name}
                    </div>
                    <label className="block text-black text-sm font-bold mb-1">
                      {data?.name}
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal({ modal: false, data: null })}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal({ modal: false, data: null })}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
