
"use client";
import StickyNotes from "../components/stickyNotes/stickyNotes";
import React, { useState, useEffect } from "react";
import { Note } from "../Types/types";
import Draggable from "react-draggable";

function StickyNotesBoard() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    console.log("Notes updated:", notes);
  }, [notes]);

  const addNote = () => {
    setNotes(prev => [...prev, { id: Date.now(), text: "", x: 50, y: 50 }]);
  };

  const deleteNote = (id: number) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const updateNoteText = (id: number, newText: string) => {
    setNotes(prev =>
      prev.map(note => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  const handleDragStop = (id: number, x: number, y: number) => {
    setNotes(prev =>
      prev.map(note => (note.id === id ? { ...note, x, y } : note))
    );
  };

  const noteRefs = notes.reduce((acc, note) => {
    acc[note.id] = React.createRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;
    return acc;
  }, {} as Record<number, React.RefObject<HTMLDivElement>>);


  const NoteMapper = () => {
  return notes.map(note => (
    <Draggable
      key={note.id}
      nodeRef={noteRefs[note.id]}
      defaultPosition={{ x: note.x, y: note.y }}
      onStop={(e, data) => handleDragStop(note.id, data.x, data.y)}
      cancel="textarea, .no-drag"
    >
      <div ref={noteRefs[note.id]} className="absolute">
        <StickyNotes
          id={note.id}
          text={note.text}
          onDelete={deleteNote}
          onTextChange={updateNoteText}
        />
      </div>
    </Draggable>
  ));
};

  return (
    <div
      className="bg-cover bg-center px-4 py-8 sm:py-10 md:py-12 lg:py-16 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]"
      style={{ backgroundImage: `url(/blackboard.jpg)` }}
    >
      <button onClick={addNote} className="bg-black text-white">
        Add Note
      </button>
      <div className="relative w-full h-[80vh]">
  <NoteMapper />
</div>
    </div>
  );
}

export default StickyNotesBoard;
