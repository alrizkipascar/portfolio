import React, { useEffect, useRef, useState } from "react";
import Animasection from "./animation";
import styles from "./accordion.module.css";
const Slides = ({
  data,
  indexData,
  stylesSlide,
  onClose,
  actionButton,
  onNext,
  onPrev,
}) => {
  return (
    <div
      className={` w-full h-48 mt-10 bg-zinc-900 border-y border-zinc-800 items-center justify-center flex `}
    >
      <div className="w-1/4 h-full flex bg-zinc-900 sticky z-50 left-0"></div>
      <div className="w-1/2 h-full flex">
        <div className={`${stylesSlide} transform duration-500`}>
          <h1>
            {data
              ? data[indexData]?.text
              : "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
          </h1>
          <p>
            {data
              ? data[indexData]?.description
              : "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
          </p>
        </div>
      </div>

      <div className="sticky z-50 right-0 ml-4 w-1/4 bg-zinc-900 h-full p-3 flex flex-col">
        <button
          onClick={() => onPrev(indexData)}
          type="button"
          className=""
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-24 sm:h-14  dark:bg-gray-800/30 hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          onClick={() => onNext(indexData)}
          type="button"
          className=" "
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8  sm:w-24 sm:h-14 bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className=" w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>

        <button
          onClick={() => onClose()}
          type="button"
          className=" "
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8  sm:w-24 sm:h-14 bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
            <span className="sr-only">Delete</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slides;
