import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  const showPassword = async () => {
    // ref.current.src = "assets/hide.png"
    if (ref.current.src.includes("icons/hide.png")) {
      passwordRef.current.type = "password";
      ref.current.src = "icons/eye.png";
    } else {
      passwordRef.current.type = "text";
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
    setpasswordArray([...passwordArray, {...form, id: uuidv4()}]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    console.log([...passwordArray, form]);
    setform({ site: "", username: "", password: "" });
  };

  const deletePassword = async (id) => {
    let c = confirm("Do you want to delete this password?")
    if(c){
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
  };

  const editPassword = async (id) => {
    setform(passwordArray.filter(item=> item.id === id)[0])
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = async (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("🦄 Copied to Clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
              ref={passwordRef}
              value={form.password}
              onChange={handleChange}
              className=" text-white hover:bg-white hover:text-blue-950 px-2 py-0.5 text-sm rounded-full w-full border border-white"
              placeholder="Password"
              type="password"
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
            className="bg-blue-400  text-sm border hover:border-white cursor-pointer w-fit mx-auto  py-1 px-2 rounded-xl flex gap-1 items-center pt-2"
          >
            <div>
              <lord-icon
                className="size-6"
                src="https://cdn.lordicon.com/gzqofmcx.json"
                trigger="hover"
              ></lord-icon>
            </div>
            Save Password
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
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-black bg-white">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" cursor-pointer hover:bg-blue-200 text-center w-32 border border-slate-100 py-1">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                      </td>
                      <td
                        className="cursor-pointer hover:bg-blue-200 text-center w-32 border border-slate-100 py-1"
                        onClick={() => {
                          copyText(item.username);
                        }}
                      >
                        {item.username}
                      </td>
                      <td
                        className="cursor-pointer hover:bg-blue-200 text-center w-32 border border-slate-100 py-1"
                        onClick={() => {
                          copyText(item.password);
                        }}
                      >
                        {item.password}
                      </td>
                      <td className="text-center w-32 border border-slate-100 py-1">
                        <span
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            className="mx-2 cursor-pointer"
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#121331,secondary:#3080e8"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            className="mx-2 cursor-pointer"
                            src="https://cdn.lordicon.com/jzinekkv.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#121331,secondary:#3080e8"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
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
