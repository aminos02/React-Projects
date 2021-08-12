import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <div id="container">
      <div id="title">
        <h3>Questions And Answers About Login</h3>
      </div>
      <div id="question-container">
        {data.map((question) => (
          <SingleQuestion
            title={question.title}
            info={question.info}
            key={question.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
