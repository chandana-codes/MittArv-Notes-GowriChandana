import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NoteDetails from "./components/NoteDetails";
import NoteForm from "./components/NoteForm";
import FloatingButton from "./components/FloatingButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/note/:id" element={<NoteDetails />} />
        <Route path="/note/new" element={<NoteForm />} />
      </Routes>
      <FloatingButton />
    </Router>
  );
}

export default App;
