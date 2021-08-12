import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [active, setActive] = useState(false);

  return (
    <div class="question">
      <div class="question-header">
        <h4>{title}</h4>
        <button className="icon" onClick={() => setActive(!active)}>
          {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {active ? <p>{info}</p> : null}
    </div>
  );
};

export default Question;
