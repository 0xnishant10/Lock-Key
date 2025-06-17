import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container my-8 mx-auto text-white text-2xl max-w-3xl">
        <h1 className="text-center">Your Password Manager</h1>
        <div className=" flex flex-col py-8">
          <input
            className="text-white hover:bg-white hover:text-blue-950 px-2 text-lg rounded-full border border-white"
            placeholder="Website"
            type="text"
          />
          <div className="flex w-full justify-between gap-5 max-w-full py-8">
            <input
              className="text-white hover:bg-white hover:text-blue-950 px-2 text-lg rounded-full w-full border border-white"
              placeholder="Username"
              type="text"
            />
            <input
              className="  text-white hover:bg-white hover:text-blue-950 px-2 text-lg rounded-full w-full border border-white"
              placeholder="Password"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
