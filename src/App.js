import React from "react";
import Timer from "./TimerDynamic/Timer";

const milli = 806455610000;

function App() {
  return (
    <div className="time">
      <Timer time={milli} />
    </div>
  );
}

export default App;
