import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = ({ id, image, job, name, text, changePerson }) => {
  return (
    <div id="container">
      <div id="img-circle">
        <img src={image} alt={name} />
        <span id="quote">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <br />
      <h5>{name}</h5>
      <h4>{job}</h4>
      <p>{text}</p>
      <div id="chevron">
        <a onClick={() => changePerson("left")}>
          <FaChevronLeft className="chevron-item" />
        </a>
        <a onClick={() => changePerson("right")}>
          <FaChevronRight className="chevron-item" />
        </a>
      </div>
      <button
        onClick={() => changePerson(Math.random() > 0.5 ? "left" : "right")}
      >
        Surpise Me
      </button>
    </div>
  );
};

export default Review;
