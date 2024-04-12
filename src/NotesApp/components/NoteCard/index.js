import { Link } from "react-router-dom";
import NoteMedia from "../NoteMedia";
import "./styles.css";

const NoteCard = (props) => {
  const { note } = props;

  return (
    <li className="note-card">
      <h2>{note.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: note.description }} />
      {note.mediaLink && <NoteMedia note={note} key={note.id} />}
      <Link to={`/note/${note.id}`} className="view-note-link">
        View Note
      </Link>
    </li>
  );
};

export default NoteCard;
