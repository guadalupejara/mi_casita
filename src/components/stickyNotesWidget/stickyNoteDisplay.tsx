"use client";

import React from "react";
import { Note } from "../../Types/types";

interface Props {
  note: Note;
}

function StickyNoteDisplay({ note }: Props) {
  return (
    <div className="p-4 rounded shadow-lg w-64 h-32 overflow-auto cursor-move"
    style={{ backgroundColor: note.color }}
    >
      <p>{note.text}</p>
    </div>
  );
}

export default StickyNoteDisplay;
