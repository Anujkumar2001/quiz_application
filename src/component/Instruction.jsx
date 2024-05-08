import React, { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
import { useCountdown } from "react-countdown-circle-timer";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { MyContext } from "../contextapi/authContextProvider";
import { useContext } from "react";

const Instruction = () => {
  const [startTime, setStartTime] = useState(5);
  const [start, setStart] = useState(false);

  const {auth,setAuth}=useContext(MyContext)

  const navigate = useNavigate();

  useEffect(()=>{
    if(!auth){
      navigate("/quiz")
    }
  },[])

  const handleStartButton = () => {
    const interval = setInterval(() => {
      setStartTime((pre) => pre - 1);
    }, 1000);
    setStart(true);
    setAuth(true)
  };

  if (startTime === 0) {
    navigate("/quiz");
    clearInterval(interval);
    setStart(false);
  }

  const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime,
    elapsedTime,
    size,
    strokeWidth,
  } = useCountdown({ isPlaying: true, duration: 7, colors: "#abc" });

  return (
    <div className="w-[80%] m-auto mt-10 flex flex-col justify-center items-center pt-[9vh]">
      <h1 className="text-2xl font-bold">welcome to Our Js Quiz Assesment</h1>
      <div className="flex justify-center flex-col items-center border-2 border-black rounded-md px-10 pb-5 mt-6">
        {" "}
        <h3 className=" mt-4 text-2xl mb-2">Instructions for the Quiz:</h3>
        <ol style={{ listStyleType: "alpha" }}>
          <li>You have 2 minutes to complete the entire quiz.</li>
          <li>
            Once you submit an answer for a question, you cannot change it.
          </li>
          <li>
            Please ensure a stable internet connection throughout the duration
            of the quiz.
          </li>
          <li>
            Any attempt to tamper with the quiz or use external resources will
            result in disqualification.
          </li>
          <li>Your progress and time will be monitored throughout the quiz.</li>
          <li>Click 'Start' when you are ready to begin. Good luck!</li>
        </ol>
      </div>
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          className=" bg-green-900 p-2 px-4 text-white rounded-md"
          onClick={handleStartButton}
        >
          Start test
        </button>
        {start && (
          <CountdownCircleTimer
            isPlaying
            duration={5}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            strokeWidth={10}
            size={80}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        )}
      </div>
    </div>
  );
};

export default Instruction;
