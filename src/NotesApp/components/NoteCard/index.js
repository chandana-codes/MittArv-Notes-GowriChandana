import { Link } from "react-router-dom";
import "./styles.css";

const NoteCard = (props) => {
  const { note } = props;

  return (
    <li className="note-card">
      <h2>{note.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: note.description }} />
      {note.mediaLink && (
        <div className="media-container">
          {note.mediaLink.includes(".mp4") ? (
            <video controls width={200} height={200}>
              <source src={note.mediaLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={note.mediaLink} alt="Note Media" />
          )}
        </div>
      )}
      <Link to={`/note/${note.id}`} className="view-note-link">
        View Note
      </Link>
    </li>
  );
};

export default NoteCard;
