import React from "react";
import Review from "./Review";
import data from "./data";
import { useState } from "react";
function App() {
  const [index, setIndex] = useState(0);
  function changePerson(direction) {
    if (direction === "left") {
      setIndex(index - 1 < 0 ? data.length - 1 : index - 1);
    } else if (direction === "right") {
      setIndex((index + 1) % data.length);
    }
  }
  return (
    <div>
      <h2 id="title">Our Reviews</h2>
      <hr id="underline" />
      <Review {...data[index]} changePerson={changePerson}></Review>
    </div>
  );
}

export default App;
