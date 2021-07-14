import React, { useCallback, useEffect, useRef, useState } from "react";
import "../app.css";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });
  useEffect(() => {
    console.log(`mounted % updated!: ${count}`);
  }, [count]); //[count] 어떤 값이 변경되었을때만 이함수가 호출 되도록 만들어줌 []비어있으면 처음에만 호출함
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
