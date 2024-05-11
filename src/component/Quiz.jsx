import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { MyContext } from "../contextapi/authContextProvider";
import { useContext } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const Quiz = () => {
  var allQuizArray = [
    // 8th Grade Math questions
    {
      id: 1,
      question: "What is the value of π (pi)?",
      correctAns: "3.14159",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "3.142" },
        { option: "2.718" },
        { option: "3.14159" },
        { option: "3.14" },
      ],
    },
    {
      id: 2,
      question: "What is the square root of 64?",
      correctAns: "8",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "6" },
        { option: "7" },
        { option: "8" },
        { option: "9" },
      ],
    },
    {
      id: 3,
      question: "If a triangle has angles measuring 45°, 45°, and 90°, what type of triangle is it?",
      correctAns: "Right triangle",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "Equilateral triangle" },
        { option: "Isosceles triangle" },
        { option: "Scalene triangle" },
        { option: "Right triangle" },
      ],
    },
    {
      id: 4,
      question: "What is the formula for the area of a rectangle?",
      correctAns: "Length × Width",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "Length + Width" },
        { option: "2 × (Length + Width)" },
        { option: "Length × Width" },
        { option: "Length ÷ Width" },
      ],
    },
    {
      id: 5,
      question: "If x = 5 and y = 3, what is the value of 2x + 3y?",
      correctAns: "19",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "16" },
        { option: "17" },
        { option: "18" },
        { option: "19" },
      ],
    },
    {
      id: 6,
      question: "What is the formula for the circumference of a circle?",
      correctAns: "2πr",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "πr^2" },
        { option: "2πr" },
        { option: "πd" },
        { option: "πr" },
      ],
    },
    {
      id: 7,
      question: "What is the value of 5! (factorial)?",
      correctAns: "120",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "20" },
        { option: "100" },
        { option: "110" },
        { option: "120" },
      ],
    },
    {
      id: 8,
      question: "If a square has a side length of 6 cm, what is its perimeter?",
      correctAns: "24 cm",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "12 cm" },
        { option: "18 cm" },
        { option: "24 cm" },
        { option: "36 cm" },
      ],
    },
    {
      id: 9,
      question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
      correctAns: "32",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "24" },
        { option: "28" },
        { option: "30" },
        { option: "32" },
      ],
    },
    {
      id: 10,
      question: "What is the value of 2^4 (2 raised to the power of 4)?",
      correctAns: "16",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "8" },
        { option: "12" },
        { option: "14" },
        { option: "16" },
      ],
    }
];




  const { setAuth } = useContext(MyContext);

  const navigate = useNavigate();

  // get time to sessionStorage----
  const lsTime = sessionStorage.getItem("time");

  const [time, setTime] = useState(lsTime);
  const [quizArray, setQuizArray] = useState(allQuizArray);
  const [totalPages, setTotalPage] = useState(Math.ceil(quizArray.length / 10));
  const [currentPage, setCurrentPage] = useState(1);
  const [inputCheck, setInputCheck] = useState(true);

  useEffect(() => {
    setAuth(false);

    const timer = setInterval(() => {
      setTime((pre) => pre - 1);
    }, 1000);

    if (time == 0) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, []);

  sessionStorage.setItem("time", time);

  const handleAns = (el, ans, num) => {
    console.log(ans);
    const index = quizArray.indexOf(el);
    const obj = quizArray[index].userSelectedAnsObj;
    for (const key in obj) {
       obj[key]=""
    }

    quizArray[index].userSelectedAnsObj[num - 1] = ans;
    const data = (quizArray[index].userSelectedAns = ans);
    console.log(quizArray);
  };

  if (time == 0) {
    navigate("/result");
    setAuth(true);
    sessionStorage.setItem("quizData", JSON.stringify(quizArray));
    sessionStorage.setItem("time", 120);
  }

  return (
    <div className="w-[80%] m-auto mt-10 relative my-10  top-[9vh] pb-9 pt-4">
      <p className="  flex border-2 border-black w-12  h-12  rounded-full items-center justify-center  absolute right-[-70px] top-[-30px]">
        {time > 60 ? Math.floor(time / 60) : "0"}:<p>{time % 60}</p>
      </p>
      {/* main quiz start from here---- */}
      <div className="flex flex-col gap-2 rounded-sm pb-10">
        {quizArray
          .slice((currentPage - 1) * 10, currentPage * 10)
          .map((el, index) => {
            return (
              <div className=" bg-slate-200 p-5 ">
                <h3 className="text-xl font-semibold mb-3">
                  {el.id}. {el.question}
                </h3>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name={`option${index}`}
                      onClick={() => {
                        handleAns(el, el.options[0].option, 1);
                      }}
                      checked={el.userSelectedAnsObj[0]}
                      style={{ width: "20px", height: "20px" }}
                    />
                    {el.options[0].option}
                  </label>
                  <label htmlFor="" className="flex gap-2 items-center">
                    <input
                      chekced={el.userSelectedAns}
                      type="radio"
                      name={`option${index}`}
                      onClick={() => {
                        handleAns(el, el.options[1].option, 2);
                      }}
                      checked={el.userSelectedAnsObj[1]}
                      style={{ width: "20px", height: "20px" }}
                    />
                    {el.options[1].option}
                  </label>{" "}
                  <label htmlFor="" className="flex gap-2 items-center">
                    <input
                      value={el.userSelectedAns}
                      checked={el.userSelectedAnsObj[2]}
                      type="radio"
                      name={`option${index}`}
                      onClick={() => {
                        handleAns(el, el.options[2].option, 3);
                      }}
                      // disabled={el.userSelectedAns ? true : false}
                      style={{ width: "20px", height: "20px" }}
                    />
                    {el.options[2].option}
                  </label>{" "}
                  <label htmlFor="" className="flex gap-2 items-center">
                    <input
                      checked={el.userSelectedAnsObj[3]}
                      type="radio"
                      name={`option${index}`}
                      onClick={() => {
                        handleAns(el, el.options[3].option, 4);
                      }}
                      // disabled={el.userSelectedAns ? true : false}
                      style={{ width: "20px", height: "20px" }}
                    />
                    {el.options[3].option}
                  </label>
                </div>
              </div>
            );
          })}
        {/* pazination ----- */}
        <div>
          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <button
        className="bg-green-800 py-2 px-5 text-white rounded-sm"
        onClick={() => {
          navigate("/result");
          sessionStorage.setItem("quizData", JSON.stringify(quizArray));
          setAuth(true);
          sessionStorage.setItem("time", 120);
          setInputCheck(false);
        }}
      >
        Submit
      </button>
    </div>
  );
};
export default Quiz;
