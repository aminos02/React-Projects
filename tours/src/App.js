import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  //const data = [];
  useEffect(() => {
    requestTours();
  }, []);
  const requestTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const json = await res.json();
      setTours(json);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const removeTour = (id) => setTours(tours.filter((tour) => tour.id !== id));
  return (
    <div id="container">
      <h1 id="title">Our Tours</h1>
      <hr id="underline" />
      {loading ? (
        <Loading></Loading>
      ) : tours.length === 0 ? (
        <h1>No tour here</h1>
      ) : (
        tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        ))
      )}
    </div>
  );
}

export default App;
/* */
