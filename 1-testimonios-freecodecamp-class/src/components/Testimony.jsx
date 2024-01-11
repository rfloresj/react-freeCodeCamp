import "../stylesheets/Testimony.css";

function Testimony(props) {
  return (
    <div className="testimony-container">
      <img
        className="testimony-img"
        src={require(`../img/testimony-${props.image}.png`)}
        alt={`${props.name}`}
      />
      <div className="testimony-text-container">
        <p className="testimony-name">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="charge-name">
          {props.charge} at <strong>{props.company}</strong>
        </p>
        <p className="testimony-text">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;
