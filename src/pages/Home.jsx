import React from "react";
import img from "../asset/manpng.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-cover w-[100%] m-auto h-[91vh] overflow-hidden top-[9vh]">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover flex items-center"
        style={{
          backgroundImage:
            'url("https://www.shutterstock.com/image-photo/man-laptop-sitting-on-edge-260nw-1772956838.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="z-20 md:ml-28 m-10 min-w-[200px] max-w-[600px]">
          <h1 className="text-5xl font-bold text-white z-20 ">
            Crack the exam <br /> and{" "}
            <span className="text-yellow-400">secure</span> a job
          </h1>
          <p className="text-white text-left mt-3">
            This online test will evaluate your fundamental skills and knowledge
            relevant to your expertise.
          </p>
          <button
            onClick={() => {
              navigate("/instruction");
            }}
            className=" bg-white px-3 py-2 mt-4 rounded-md font-semibold"
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
