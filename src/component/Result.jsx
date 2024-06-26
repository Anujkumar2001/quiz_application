import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineDone } from "react-icons/md";

const Result = () => {
  const navigate = useNavigate();
  const getData = JSON.parse(sessionStorage.getItem("quizData"));

  const [totalScore, setTotalScore] = useState(0);
  const [userQuizData, setUserQuizData] = useState(getData);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [username,setUserName]=useState("")

  useEffect(() => {
    // Assuming getData and totalScore are properly initialized and available here
    userQuizData.forEach((el) => {
      if (el.userSelectedAns === el.correctAns) {
        setTotalScore((prevTotalScore) => prevTotalScore + 1); // Update totalScore
        console.log("correct answer");
      }
      setTotalQuestion(getData.length);
      setUserName(sessionStorage.getItem('username'))
    });
  }, []);
  return (
    <div className="w-[80%] min-w-[400px] m-auto flex items-center bg-slate-200 mt-10 p-5 justify-center flex-col gap-4 pt-[9vh]">
      <h1 className="text-2xl font-bold border-b-2 border-black">
        Your Report Card
      </h1>
     <div className="flex w-[60%]">
     <h2 className="text-xl  font-semibold border-b-2 border-black w-full">Name: <span className="font-normal ">{username}</span></h2>
     </div>
      <div className="border-2 border-black p-3 w-[60%]">
        <table className="w-full">
          <thead>
            <tr className="border-2 border-black font-bold">
              <th>Qestion NO.</th>
              <th> Ans</th>
              <th>Your Answer</th>
              <th>Correct Ans</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((el, i) => (
              <>
                <tr className="border-black border-2 p-5 font-thin">
                  <th className="p-4">{i + 1}</th>
                  <th className="text-red-700 text-center text-xl ">
                    {el.userSelectedAns !== el.correctAns ? (
                      "X"
                    ) : (
                      <MdOutlineDone className="text-center text-xl text-green-700 font-extrabold" />
                    )}
                  </th>
                  <th>{el.userSelectedAns}</th>
                  <th>{el.correctAns}</th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-10 bg-black w-full py-3 text-white text-xl px-2">
        <div className="flex gap-3">
          <h2>your score</h2>
          <p className="text-orange-600 font-bold">{totalScore}</p>
        </div>
        <div className="font-thin text-xl">
          <h3 className="font-thin text-[15px]">
            You Got {Number(Number.parseFloat((totalScore * 100) / totalQuestion).toFixed(2))}% Marks
            <span
              className={`${
                (totalScore * 100) / totalQuestion > 50
                  ? "text-green-400"
                  : "text-red-600"
              }`}
            >
              {totalScore > 5
                ? "You are Selected"
                : " Sorry Better luck Next Time"}
            </span>
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button
          className="bg-green-500 text-white py-3 px-4 rounded-lg mb-10"
          onClick={print}
        >
          Print
        </button>
        <button
          onClick={() => {
            sessionStorage.removeItem("quizData");
            navigate("/");
            sessionStorage.removeItem('username')
          }}
          className="bg-red-700 text-white py-3 px-4 rounded-lg mb-10"
        >
          Delete Result
        </button>
      </div>
    </div>
  );
};

export default Result;
