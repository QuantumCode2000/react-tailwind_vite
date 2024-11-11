import { useState } from "react";
import reactLogo from "./assets/react.svg";
import tailwindLogo from "./assets/tailwind.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="flex  flex-col  items-center  justify-center  min-h-screen p-6">
        <h1 className="text-4xl text-center font-extrabold">
          React + Tailwind Configuration
        </h1>
        <div className="flex justify-center items-center flex-col ">
          <div className="flex flex-row  m-3">
            <img className="h-52 w-52" src={reactLogo} alt="React Logo" />
            <div className="w-52 h-52 text-9xl flex text-center justify-center items-center">
              <p>+</p>
            </div>
            <img className="h-52 w-52" src={tailwindLogo} alt="Tailwind Logo" />
          </div>
          <img className="h-52  " src={viteLogo} alt="Vite Logo" />
        </div>
      </div>
    </>
  );
}

export default App;
