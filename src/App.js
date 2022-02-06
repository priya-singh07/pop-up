import React from "react";
import './App.css'
export const App = () => {

  const openWindow = () => {
    const top=window.innerHeight-500
    const left=window.innerWidth-450
    let dest = "";
    var mq = window.matchMedia( "(max-width: 570px)" );
    if (!mq.matches) {
        dest = "_blank"
    }
    if(dest !== "") {
      window.open("https://www.google.com", dest, `width=400,height=450,left=${left},top=${top}`);
    }
    else {
      window.open("https://www.google.com", `width=400,height=450,left=${left},top=${top}`);
    }
    
  };

  return (
    <>
    <div className="name">PRIYA SINGH</div>
    <div className="click">
      <button onClick={openWindow} className="btn">Click Me</button>
    </div>
    </>
  );
};
