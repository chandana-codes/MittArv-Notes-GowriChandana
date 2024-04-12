import { Link } from "react-router-dom";
import { PiNotePencilBold } from "react-icons/pi";
import "./styles.css";

const FloatingButton = () => {
  return (
    <div className="floating-button-container">
      <Link to="/note/new" className="add-note-link">
        <button type="button" className="notes-form-btn">
          <PiNotePencilBold />
        </button>
      </Link>
    </div>
  );
};

export default FloatingButton;
