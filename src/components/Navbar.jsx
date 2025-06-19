import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white text-3xl text-center py-2 flex justify-between items-center px-10">
      <div>
        Lock
        <span className="text-blue-400">&</span>
        Key
      </div>

      <a href="https://github.com/0xnishant10" target="_blank">
      <div className="text-sm p-1 flex items-center gap-3 border rounded-4xl">
        <img className="rounded-full w-7" src="icons/github.png" alt="" />
        <span>github</span>
      </div>
      </a>
    </nav>
  );
};

export default Navbar;
