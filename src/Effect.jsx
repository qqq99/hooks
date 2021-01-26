import React, { useState, useEffect } from "react";

export default function Effect(props) {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    /**等同于：定时器setTimeout
     * const timer = setTimeout(setTime(new Date()),1000)
     */

    return function cleanUp() {
      clearInterval(timer);
    };
    //return ()=>clearTimeout(timer);
  }, [time]);

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <div>
      useEffect Example:{time.toLocaleTimeString()};
      <button onClick={() => setCount(count + 1)}>count Effect: {count}</button>
    </div>
  );
}
