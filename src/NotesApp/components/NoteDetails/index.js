import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

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
          {note.mediaLink && (
            <div className="media-container">
              {note.mediaLink.includes(".mp4") ? (
                <video controls width={400} height={400}>
                  <source src={note.mediaLink} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={note.mediaLink} alt="Note Media" />
              )}
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NoteDetails;
