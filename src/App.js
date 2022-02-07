import React, { useEffect } from "react";
import "./App.css";

export const App = () => {
  useEffect(() => {
    window.addEventListener("message", function (event) {
      let frameToRemove = document.getElementById("iframe");
      if (frameToRemove) {
        frameToRemove.parentNode.removeChild(frameToRemove);
        document.body.style.overflow = "inherit";
      }
    });
  });

  let openFrame = () => {
    var mq = window.matchMedia("(max-width: 570px)");

    let iframe = document.createElement("iframe");
    iframe.src = `https://www.embedeasy.com/`;
    iframe.id = "iframe";
    iframe.style.position = "absolute";
    iframe.style.zIndex = "1";
    iframe.style.height = "60%";
    iframe.style.width = "40%";

    if (mq.matches) {
      iframe.style.height = "100%";
      iframe.style.width = "100%";
      iframe.style.top = "30px";
    }
    
    iframe.style.bottom = 0;
    iframe.style.right = 0;
    iframe.style.backgroundColor = "gray";
    iframe.style.border = "none";
    let button = document.createElement("button");
    button.innerText = "Close";
    button.style.bottom = "60px";
    button.style.right = "40px";
    button.style.zIndex = "1";
    button.style.padding = "5px";
    button.addEventListener("click", () => {
      let url =
        window.location !== window.parent.location
          ? document.referrer
          : document.location.href;
      window.parent.postMessage("close-iframe", url);
      button.style.display = "none";
    });
    document.body.prepend(iframe);
    document.body.prepend(button);
  };

  return (
    <>
      <div className="name">PRIYA SINGH</div>
      <div className="click">
        <button className="btn" onClick={openFrame}>
          Click Me
        </button>
      </div>
    </>
  );
};
