import { useState } from "react";
const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <div className="description">
        <h4 className="name">{props.name}</h4>
        <h4 className="price">${props.price}</h4>
      </div>
      <p className="info">
        {readMore ? props.info : props.info.substring(0, 200)}...
        <button className="readMore" onClick={() => setReadMore(!readMore)}>
          {readMore ? " show less" : " read more"}
        </button>
      </p>

      <button className="btn" onClick={() => props.removeTour(props.id)}>
        Not interested
      </button>
    </div>
  );
};
export default Tour;
