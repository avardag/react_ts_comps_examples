import React, { useEffect, useState } from "react";

function UseEffectCompoment() {
  const [timerVal, setTimerVal] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimerVal((v) => v + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <div>{timerVal}</div>;
}

export default UseEffectCompoment;
