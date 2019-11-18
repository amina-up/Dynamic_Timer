import React from "react";
import "./Timer.css";
const Timer = ({ time }) => {
  if (time > 86400000) {
    time = 0;
  }

  let seconds = parseInt(time / 1000);
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  seconds = seconds - hours * 3600 - minutes * 60;
  return (
    <div className="list-time">
      <div className="hours">
        <span>{hours > 9 ? hours : "0" + hours}:</span>
        <span className="letter">Hour</span>
      </div>
      <div className="minutes">
        <span> {minutes > 9 ? minutes : "0" + minutes}:</span>
        <span className="letter">Minute</span>
      </div>
      <div className="seconds">
        <span> {seconds > 9 ? seconds : "0" + seconds}</span>
        <span className="letter">Second</span>
      </div>
    </div>
  );
};

export default Timer;
