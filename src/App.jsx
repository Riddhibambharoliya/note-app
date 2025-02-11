import { useState } from "react";
import { FaHeart, FaTrash, FaPlus } from "react-icons/fa";
import './index.css';

export default function App() {
  const [notes, setNotes] = useState([]); // State to store notes
  const [input, setInput] = useState(""); // State to manage input field

  // Function to add a new note
  const addNote = () => {
    if (input.trim() !== "") {
      setNotes([...notes, input]); // Add the new note to the notes array
      setInput(""); // Clear the input field
    }
  };

  // Function to delete a note
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index)); // Remove the note at the specified index
  };

  return (
    <div className="app-container">
      {/* Header */}
      <h1 className="header-title">
        <FaHeart className="heart-icon" />Write Your Thought Here!
      </h1>

      {/* Input Section */}
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a lovely note..."
          className="note-input"
        />
        <button onClick={addNote} className="add-button">
          <FaPlus /> Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note-item">
            <span className="note-text">
              <FaHeart className="small-heart-icon" /> {note}
            </span>
            <FaTrash
              className="delete-icon"
              onClick={() => deleteNote(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}