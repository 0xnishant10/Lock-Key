import React from "react";
import { useRef } from "react";

const Manager = () => {
  const ref = useRef();
  const showPassword = async () => {
    // ref.current.src = "assets/hide.png"
    if(ref.current.src.includes("icons/hide.png")){
      ref.current.src = "icons/eye.png"
    }else{
      ref.current.src = "icons/hide.png"
    }
    
  }
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container my-8 mx-auto text-white max-w-3xl">
        <h1 className="text-center text-2xl">Your Password Manager</h1>
        <div className=" flex flex-col py-8">
          <input
            className="text-white hover:bg-white hover:text-blue-950 px-2 py-0.5 text-sm rounded-full border border-white"
            placeholder="Website"
            type="text"
          />
          <div className="relative flex w-full justify-between gap-5 max-w-full py-8">
            <input
              className="text-white hover:bg-white hover:text-blue-950 px-2 py-0.5 text-sm rounded-full w-full border border-white"
              placeholder="Username"
              type="text"
            />
            <input
              className=" text-white hover:bg-white hover:text-blue-950 px-2 py-0.5 text-sm rounded-full w-full border border-white"
              placeholder="Password"
              type="text"
            />
            <img ref={ref} className="w-5 absolute right-2 bottom-9" src="icons/eye.png" alt="" onClick={showPassword}/>
          </div>
          <button className="bg-blue-400 text-black w-fit mx-auto py-1 px-2 rounded-xl flex gap-1 items-center">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/gzqofmcx.json"
                trigger="hover"
              ></lord-icon>
            </div>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
