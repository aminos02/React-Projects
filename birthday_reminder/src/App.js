import React, { useState } from "react";
import data from "./data";
import "./app.css";
import Person from "./Person";
function App() {
  const [peoples, setPeople] = useState(data);
  return (
    <div id="container">
      <div id="card">
        <h2>{peoples.length} birthdays today</h2>
        {peoples.map((person) => (
          <Person
            name={person.name}
            age={person.age}
            image={person.image}
          ></Person>
        ))}
        <button id="btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
