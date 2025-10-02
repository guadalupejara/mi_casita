
"use client";
import StickyNotes from "../components/stickyNotes/stickyNotes";
import React, { useState, useEffect } from "react";
import { Note, UserProfile } from "../Types/types";
import Draggable from "react-draggable";
import { addNoteToDB, updateNoteInDB, deleteNoteFromDB, getNotesForUser } from "../Services/stickyNote/noteService";

interface Props {
  userProfile: UserProfile | null;
}

function StickyNotesBoard({ userProfile }: Props) {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    console.log("Notes updated:", notes);
  }, [notes]);
  
  useEffect(() => {
  if (!userProfile?.uid) return;

  const fetchNotes = async () => {
    try {
      const userNotes = await getNotesForUser(userProfile.uid);
      setNotes(userNotes);
      console.log("Loaded notes:", userNotes);
    } catch (err) {
      console.error("Failed to fetch notes:", err);
    }
  };

    fetchNotes();
  }, [userProfile?.uid]);
const updateNoteColor = (id: number, newColor: string) => {
  setNotes(prev =>
    prev.map(note => {
      if (note.id === id) {
        const updatedNote = { ...note, color: newColor };

        if (note.firebaseId) {
          updateNoteInDB(note.firebaseId, { color: newColor })
            .catch(err => console.error("Failed to update color in DB:", err));
        }

        return updatedNote;
      }
      return note;
    })
  );
};

const updateNoteFont = (id: number, newFont: string) => {
  setNotes(prev =>
    prev.map(note => {
      if (note.id === id) {
        const updatedNote = { ...note, font: newFont };

        if (note.firebaseId) {
          updateNoteInDB(note.firebaseId, { font: newFont })
            .catch(err => console.error("Failed to update font in DB:", err));
        }

        return updatedNote;
      }
      return note;
    })
  );
};


const addNote = async () => {
  if (!userProfile) {
    console.warn("User not logged in, cannot add note.");
    return;
  }

  const localId = Date.now();

  const newNote: Note = {
    id: localId,
    text: "",
    x: 50,
    y: 50,
    color: "var(--them-color2-dark)",
    font: "font-atkinson",
    firebaseId: "",
    userId: userProfile.uid,
  };

  setNotes(prev => [...prev, newNote]);

  try {
    const firebaseId = await addNoteToDB(newNote, userProfile.uid);

    // Update local state with firebaseId
    setNotes(prev =>
      prev.map(note =>
        note.id === localId ? { ...note, firebaseId } : note
      )
    );

    // Also patch Firestore so the document knows its own firebaseId
    await updateNoteInDB(firebaseId, { firebaseId });

    console.log("Note saved for user:", userProfile.uid, "with ID:", firebaseId);
  } catch (err) {
    console.error("Failed to save note to DB", err);
  }
};

const deleteNote = (id: number) => {
  setNotes(prev => {
    const noteToDelete = prev.find(note => note.id === id);

    if (noteToDelete?.firebaseId) {
      deleteNoteFromDB(noteToDelete.firebaseId)
        .catch(err => console.error("Failed to delete note from DB:", err));
    }

    return prev.filter(note => note.id !== id);
  });
};


const updateNoteText = (id: number, newText: string) => {
  setNotes(prev =>
    prev.map(note => {
      if (note.id === id) {
        const updatedNote = { ...note, text: newText };

        if (note.firebaseId) {
          updateNoteInDB(note.firebaseId, { text: newText })
            .catch(err => console.error("Failed to update text in DB:", err));
        }

        return updatedNote;
      }
      return note;
    })
  );
};

const updateNotePosition = (id: number, x: number, y: number) => {
  setNotes(prev =>
    prev.map(note => {
      if (note.id === id) {
        const updatedNote = { ...note, x, y };

        if (note.firebaseId) {
          updateNoteInDB(note.firebaseId, { x, y })
            .catch(err => console.error("Failed to update position in DB:", err));
        }

        return updatedNote;
      }
      return note;
    })
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
  onStop={(e, data) => updateNotePosition(note.id, data.x, data.y)}
  cancel="textarea, .no-drag, .color-swatch, .font"
>
  <div ref={noteRefs[note.id]} className="absolute">
    <StickyNotes
      key={note.id}
      id={note.id}
      text={note.text}
      color={note.color}
      font={note.font}
      onDelete={deleteNote}
      onTextChange={updateNoteText}
      onColorChange={updateNoteColor}
      onFontChange={updateNoteFont}
    />
  </div>
</Draggable>
  ));
};

  return (
    <div
      className="bg-cover bg-center px-4 py-8 sm:py-10 md:py-12 lg:py-16 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]"
      style={{ backgroundImage: `url(/smileyFace.jpg)` }}
    >
      <h1 className="text-3xl font-bold mb-4 text-black"> Sticky Notes Board</h1>
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
