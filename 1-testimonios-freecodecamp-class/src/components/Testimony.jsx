import React from "react";
import "../stylesheets/Testimony.css";

class Testimony extends React.Component {
  render() {
    return (
      <div className="testimony-container">
        <img
          className="testimony-img"
          src={require(`../img/testimony-${this.props.image}.png`)}
          alt={`${this.props.name}`}
        />
        <div className="testimony-text-container">
          <p className="testimony-name">
            <strong>{this.props.name}</strong> in {this.props.country}
          </p>
          <p className="charge-name">
            {this.props.charge} at <strong>{this.props.company}</strong>
          </p>
          <p className="testimony-text">"{this.props.testimony}"</p>
        </div>
      </div>
    );
  }
}

export default Testimony;
