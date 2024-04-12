import { useState, useEffect } from "react";
import NoteCard from "../NoteCard";
import "./styles.css";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <h1>NOTES</h1>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <ul className="notes-list">
        {filteredNotes.map((note, index) => (
          <NoteCard key={index} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
