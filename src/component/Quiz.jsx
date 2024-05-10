import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { MyContext } from "../contextapi/authContextProvider";
import { useContext } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const Quiz = () => {
  var allQuizArray = [
    // JavaScript questions
    {
      id: 1,
      question: "What does 'DOM' stand for in JavaScript?",
      correctAns: "Document Object Model",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "Data Object Model" },
        { option: "Document Object Model" },
        { option: "Dynamic Object Model" },
        { option: "Digital Object Model" },
      ],
    },
    {
      id: 2,
      question: "What is a closure in JavaScript?",
      correctAns:
        "A function that has access to its outer function's scope even after the outer function has finished executing",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "A function declared within another function" },
        { option: "A function that takes another function as an argument" },
        { option: "A function that returns a function" },
        {
          option:
            "A function that has access to its outer function's scope even after the outer function has finished executing",
        },
      ],
    },
    {
      id: 3,
      question: "What does 'NaN' stand for?",
      correctAns: "Not a Number",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "No Answer Needed" },
        { option: "Not a Number" },
        { option: "Not a Node" },
        { option: "New and Number" },
      ],
    },
    {
      id: 4,
      question: "What is the purpose of 'use strict' in JavaScript?",
      correctAns:
        "To enforce stricter parsing and error handling in JavaScript",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "To use external JavaScript libraries" },
        { option: "To prevent browsers from running JavaScript" },
        {
          option:
            "To enforce stricter parsing and error handling in JavaScript",
        },
        { option: "To enable asynchronous JavaScript execution" },
      ],
    },
    {
      id: 5,
      question: "What is the result of the expression 5 + '5' in JavaScript?",
      correctAns: "55",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "'10'" },
        { option: "10" },
        { option: "55" },
        { option: "Error" },
      ],
    },
    {
      id: 6,
      question: "What does 'AJAX' stand for?",
      correctAns: "Asynchronous JavaScript and XML",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "Advanced JavaScript and XML" },
        { option: "Asynchronous JavaScript and XML" },
        { option: "All JavaScript and XML" },
        { option: "Automatic JavaScript and XML" },
      ],
    },
    {
      id: 7,
      question: "Which keyword is used to declare variables in JavaScript?",
      correctAns: "var",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "int" },
        { option: "var" },
        { option: "string" },
        { option: "let" },
      ],
    },
    {
      id: 8,
      question: "What is the purpose of 'typeof' operator in JavaScript?",
      correctAns: "To determine the type of a variable or expression",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "To define a new variable" },
        { option: "To perform mathematical operations" },
        { option: "To determine the type of a variable or expression" },
        { option: "To declare a function" },
      ],
    },
    {
      id: 9,
      question:
        "What is the output of the following code snippet: console.log(2 + '2' - 1); ?",
      correctAns: "21",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "21" },
        { option: "3" },
        { option: "20" },
        { option: "22" },
      ],
    },
    {
      id: 10,
      question:
        "Which built-in method removes the last element from an array and returns that element?",
      correctAns: "pop()",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "shift()" },
        { option: "pop()" },
        { option: "delete()" },
        { option: "remove()" },
      ],
    },
    // HTML questions
    {
      id: 11,
      question: "What does HTML stand for?",
      correctAns: "HyperText Markup Language",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "HyperText Markup Language" },
        { option: "Highly Textual Markup Language" },
        { option: "Home Tool Markup Language" },
        { option: "Hyperlink and Text Markup Language" },
      ],
    },
    {
      id: 12,
      question: "What is the correct HTML element for inserting a line break?",
      correctAns: "<br>",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "<break>" },
        { option: "<lb>" },
        { option: "<br>" },
        { option: "<linebreak>" },
      ],
    },
    // CSS questions
    {
      id: 21,
      question: "What does CSS stand for?",
      correctAns: "Cascading Style Sheets",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "Cascading Style Sheets" },
        { option: "Creative Style Sheets" },
        { option: "Computer Style Sheets" },
        { option: "Colorful Style Sheets" },
      ],
    },
    {
      id: 22,
      question:
        "Which CSS property is used to change the text color of an element?",
      correctAns: "color",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "text-color" },
        { option: "color" },
        { option: "text-style" },
        { option: "font-color" },
      ],
    },
    // Additional JavaScript questions
    {
      id: 31,
      question: "What is an IIFE in JavaScript?",
      correctAns: "Immediately Invoked Function Expression",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "Internal Inline Function Execution" },
        { option: "Immediate Invocation Function Execution" },
        { option: "Inner Inline Function Execution" },
        { option: "Immediately Invoked Function Expression" },
      ],
    },
    {
      id: 32,
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      correctAns: "To refer to the current object",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "To declare a variable" },
        { option: "To refer to the previous object" },
        { option: "To refer to the next object" },
        { option: "To refer to the current object" },
      ],
    },
    // React questions
    {
      id: 41,
      question: "What is JSX in React?",
      correctAns: "JavaScript XML",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "JavaScript Extension" },
        { option: "JavaScript XML" },
        { option: "JavaScript and XML" },
        { option: "JavaScript Syntax Extension" },
      ],
    },
    {
      id: 42,
      question: "What function is used to change the state in React?",
      correctAns: "setState()",
      userSelectedAns: "",
      userSelectedAnsObj: {
        0: "",
        1: "",
        2: "",
        3: ""
      },
      options: [
        { option: "changeState()" },
        { option: "updateState()" },
        { option: "modifyState()" },
        { option: "setState()" },
      ],
    },
    // Add more React questions here...
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
