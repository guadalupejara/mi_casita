"use client";

import React, { useState } from "react";
import { Note } from "../../Types/types";
import StickyNoteDisplay from "./stickyNoteDisplay";
import {ChevronRight, ChevronLeft } from "lucide-react";

interface Props {
  notes: Note[];
}
function StickyNotesBoard({notes}: Props) {
console.log("Here are the notes on the widget",notes)
const [currentIndex, setCurrentIndex] = useState(0);
  if (!notes || notes.length === 0) {
    return <div>No notes available</div>;
  }

    const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % notes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + notes.length) % notes.length);
  };
    return(
        <>
     <div className="sticky-notes-board fixed bottom-4 right-4 z-50">
      <div className="bg-black/25 flex justify-between mt-2">
        <button onClick={handlePrev} className="px-2 py-1 rounded">
        <ChevronLeft/>
        </button>
        <button onClick={handleNext} className="px-2 py-1rounded">
        <ChevronRight/>
        </button>
        
      </div>
      <StickyNoteDisplay note={notes[currentIndex]} />
    </div>
        </>
    )
}
export default StickyNotesBoard