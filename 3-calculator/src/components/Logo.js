import freeCodeCampLogo from "../images/freecodecamp-logo.png";
import "./Logo.css";

const Logo = () => (
  <div className="freecodecamp-logo-container">
    <img
      src={freeCodeCampLogo}
      alt="freeCodeCamp-logo"
      className="freecodecamp-logo"
    />
  </div>
);

export default Logo;
