import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { MyContext } from "../contextapi/authContextProvider";
import { useContext } from "react";

const Quiz = () => {
  var allQuizArray = [
    {
      id: 1,
      question: "What does 'DOM' stand for in JavaScript?",
      correctAns: "Document Object Model",
      userSelectedAns: "",
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
      options: [
        { option: "shift()" },
        { option: "pop()" },
        { option: "delete()" },
        { option: "remove()" },
      ],
    },
  ];

  const { setAuth } = useContext(MyContext);

  const navigate = useNavigate();


  // get time to localStorage----
  const lsTime = localStorage.getItem("time");

  const [time, setTime] = useState(lsTime);
  const [quizArray, setQuizArray] = useState(allQuizArray);

  useEffect(() => {
    localStorage.setItem("time", 120);
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

  localStorage.setItem("time", time);

  const handleAns = (el, ans) => {
    const index = quizArray.indexOf(el);
    const data = (quizArray[index].userSelectedAns = ans);
    console.log(quizArray);
  };

  if (time == 0) {
    navigate("/result");
    localStorage.setItem("quizData", JSON.stringify(quizArray));
    localStorage.setItem('time',120)
  }
  return (
    <div className="w-[80%] m-auto mt-10 relative my-10  top-[9vh] pb-9 pt-2">
      <p className="flex border-2 border-black w-16 justify-center rounded-lg absolute top-[-35px] right-0">
        {time > 60 ? Math.floor(time / 60) : "0"}:<p>{time % 60}</p>
      </p>
      {/* main quiz start from here---- */}
      <div className="flex flex-col gap-2 rounded-sm pb-10">
        {quizArray.map((el, index) => {
          return (
            <div className=" bg-slate-200 p-5 ">
              <h3 className="text-xl font-semibold mb-3">
                {index + 1}. {el.question}
              </h3>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name={`option${index}`}
                    onClick={() => {
                      handleAns(el, el.options[0].option);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  />
                  {el.options[0].option}
                </label>
                <label htmlFor="" className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name={`option${index}`}
                    onClick={() => {
                      handleAns(el, el.options[1].option);
                    }}
                    // disabled={el.userSelectedAns ? true : false}
                    style={{ width: "20px", height: "20px" }}
                  />
                  {el.options[1].option}
                </label>{" "}
                <label htmlFor="" className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name={`option${index}`}
                    onClick={() => {
                      handleAns(el, el.options[2].option);
                    }}
                    // disabled={el.userSelectedAns ? true : false}
                    style={{ width: "20px", height: "20px" }}
                  />
                  {el.options[2].option}
                </label>{" "}
                <label htmlFor="" className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name={`option${index}`}
                    onClick={() => {
                      handleAns(el, el.options[3].option);
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
      </div>
      <button
        className="bg-green-800 py-2 px-5 text-white rounded-sm"
        onClick={() => {
          navigate("/result");
          localStorage.setItem("quizData", JSON.stringify(quizArray));
          setAuth(true);localStorage.setItem('time',120)
        }}
      >
        Submit
      </button>
    </div>
  );
};
export default Quiz;
