import React from "react";
import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  const showPassword = async () => {
    // ref.current.src = "assets/hide.png"
    if (ref.current.src.includes("icons/hide.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/hide.png";
    }
  };

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const savePassword = async () => {
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = async (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container my-8 mx-auto  max-w-4xl">
        <h1 className="text-center text-2xl text-white">
          Your Password Manager
        </h1>
        <div className=" flex flex-col py-8">
          <input
            value={form.site}
            onChange={handleChange}
            className="text-white hover:bg-white hover:text-blue-950 px-2 py-0.5 text-sm rounded-full border border-white"
            placeholder="Website"
            type="text"
            name="site"
          />
          <div className="relative flex w-full justify-between gap-5 max-w-full py-8">
            <input
              value={form.username}
              onChange={handleChange}
              className="text-white hover:bg-white hover:text-blue-950 px-2 py-0.5 text-sm rounded-full w-full border border-white"
              placeholder="Username"
              type="text"
              name="username"
            />
            <input
              value={form.password}
              onChange={handleChange}
              className=" text-white hover:bg-white hover:text-blue-950 px-2 py-0.5 text-sm rounded-full w-full border border-white"
              placeholder="Password"
              type="text"
              name="password"
            />
            <img
              ref={ref}
              className="cursor-pointer w-5 absolute right-2 bottom-9"
              src="icons/eye.png"
              alt=""
              onClick={showPassword}
            />
          </div>
          <button
            onClick={savePassword}
            className="bg-blue-400 text-sm border hover:border-white hover:animate-bounce cursor-pointer text-black w-fit mx-auto  py-1 px-2 rounded-xl flex gap-1 items-center"
          >
            <div>
              <lord-icon
                className="size-6"
                src="https://cdn.lordicon.com/gzqofmcx.json"
                trigger="hover"
              ></lord-icon>
            </div>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="text-2xl font-bold py-3 text-white">Your Passwords</h2>
          {passwordArray.length === 0 && (
            <div className="text-blue-400"> No Saved Passwords :(</div>
          )}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-xl overflow-hidden">
              <thead className="bg-blue-400">
                <tr>
                  <th className="py-2">Website</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="text-black bg-white">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center w-32 border border-slate-100 py-2">
                        <a href={item.site} target="_blank">{item.site}</a>
                      </td>
                      <td className="text-center w-32 border border-slate-100 py-2">
                        {item.username}
                      </td>
                      <td className="text-center w-32 border border-slate-100 py-2">
                        {item.password}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
