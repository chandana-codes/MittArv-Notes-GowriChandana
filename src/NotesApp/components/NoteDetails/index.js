import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import NoteMedia from "../NoteMedia";

const NoteDetails = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const selectedNote = storedNotes.find((note) => note.id === parseInt(id));
    setNote(selectedNote);
  }, [id]);

  console.log("note", note);
  return (
    <div className="note-detail-container">
      {note ? (
        <>
          <h1>{note.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: note.description }} />
          {note.mediaLink && <NoteMedia note={note} key={note.id} />}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NoteDetails;
