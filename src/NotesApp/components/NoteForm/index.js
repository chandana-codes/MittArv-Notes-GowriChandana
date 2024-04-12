import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./styles.css";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mediaLink, setMediaLink] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      description,
      mediaLink,
    };
    saveNoteToLocal(newNote);
    navigate("/");
  };

  const saveNoteToLocal = (note) => {
    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = [...existingNotes, note];
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="note-form-container">
      <h1>Add Note</h1>
      <form className="note-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="note-form-input"
        />
        <label>Description:</label>
        <ReactQuill
          value={description}
          onChange={setDescription}
          className="note-form-input"
        />
        <label>Media Link:</label>
        <input
          type="text"
          value={mediaLink}
          onChange={(e) => setMediaLink(e.target.value)}
          className="note-form-input"
        />
        <button type="submit" className="note-form-submit-btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
