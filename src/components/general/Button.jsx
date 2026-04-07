import "./general.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ label, className, onClick, icon }) {
  return (
    <button className={`button ${className || ""}`} onClick={onClick}>Load More..
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
}

export default Button;
