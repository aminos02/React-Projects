const Tour = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="Tour Image" />
      <div className="description">
        <h4 className="name">{props.name}</h4>
        <h4 className="price">${props.price}</h4>
      </div>
      <p className="info">{props.info}</p>
      <button className="btn">Not interested</button>
    </div>
  );
};
export default Tour;
