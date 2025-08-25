
"use client";
import React, { useState, useEffect } from "react";
import StickyNoteProps from '../../Types/types';
import { X } from 'lucide-react';

function StickyNotes({ id, text, onDelete, onTextChange }: StickyNoteProps) {
  const [editableText, setEditableText] = useState(text);

  useEffect(() => {
    setEditableText(text);
  }, [text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableText(e.target.value);
  };

  const handleBlur = () => {
    onTextChange(id, editableText);
  };

  return (
    <div className="relative bg-yellow-200 rounded-xl shadow-lg w-48 h-48 flex flex-col">
      <div className="relative bg-yellow-300/20 flex justify-end items-center h-10 rounded-t-xl px-2">
        <button
          className="text-black hover:text-red-400 transition no-drag"
          onClick={() => onDelete(id)}
        >
          <X size={16} />
        </button>
      </div>
      <textarea
        value={editableText}
        onChange={handleChange}
        onBlur={handleBlur}
        className="flex-1 p-2 resize-none bg-transparent outline-none rounded-b-xl"
        placeholder="Write something..."
      />
    </div>
  );
}

export default StickyNotes;
