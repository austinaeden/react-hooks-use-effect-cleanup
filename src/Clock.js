import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
    const addTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  // return a cleaned function  
  return function cleanup() {
    clearInterval(addTime);
  };
}, []);
  return <div>{time.toString()}</div>;
}

export default Clock;