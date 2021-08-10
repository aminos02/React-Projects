const Person = (props) => {
  console.log(props);
  return (
    <div className="people">
      <img src={props.image} alt="" />
      <div className="info">
        <h4>{props.name}</h4>
        <p>{props.age} years</p>
      </div>
    </div>
  );
};

export default Person;
