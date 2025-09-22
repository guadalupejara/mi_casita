"use client";
import React, { useState, useEffect } from "react";
import StickyNoteProps from "../../Types/types";
import { X, Rainbow, Type } from "lucide-react";

function StickyNotes({
  id,
  text,
  color,
  font,
  onDelete,
  onTextChange,
  onColorChange,
  onFontChange,
}: StickyNoteProps) {
  const [editableText, setEditableText] = useState(text);
  const [showPalette, setShowPalette] = useState(false);
  const [showFonts, setShowFonts] = useState(false);

  const themeColors = [
    "var(--them-color1-light)",
    "var(--them-color1-dark)",
    "var(--them-color2-light)",
    "var(--them-color2-dark)",
    "var(--them-color3-light)",
    "var(--them-color3-dark)",
    "var(--them-color4-light)",
    "var(--them-color4-dark)",
    "var(--them-color5-light)",
    "var(--them-color5-dark)",
  ];

  const fonts = [
    { name: "Atkinson", class: "font-atkinson" },
    { name: "Parisienne", class: "font-parisienne" },
    { name: "Roboto", class: "font-roboto" },
  ];

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
    <div
      className="relative rounded-xl shadow-lg w-48 h-48 flex flex-col"
      style={{ backgroundColor: color }}
    >
      {/* Top bar: delete + controls */}
      <div className="relative flex justify-between items-center h-10 rounded-t-xl px-2 bg-black/10">
        {/* Delete button */}
        <button
          className="text-black hover:text-red-400 transition no-drag"
          onClick={() => onDelete(id)}
        >
          <X size={16} />
        </button>

        {/* Controls: color + font */}
        <div className="flex gap-2">
          {/* Color toggle */}
          <div className="relative">
            <button className="no-drag" onClick={() => setShowPalette(!showPalette)}>
              <Rainbow size={20} />
            </button>
            {showPalette && (
              <div className="color-swatch absolute right-0 top-full mt-1 flex flex-wrap gap-1 p-1 bg-white rounded shadow-lg z-10">
                {themeColors.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      onColorChange(id, c);
                      setShowPalette(false);
                    }}
                    className="w-6 h-6 rounded-full border border-black/20 hover:scale-110 transition"
                    style={{ backgroundColor: c }}
                  >
                    {c === color && (
                      <span className="block w-2 h-2 rounded-full bg-white mx-auto my-auto" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Font toggle */}
          <div className="relative">
            <button className="no-drag" onClick={() => setShowFonts(!showFonts)}>
              <Type size={20} />
            </button>
            {showFonts && (
              <div className="font absolute right-0 top-full mt-1 flex flex-col gap-1 p-1 bg-white rounded shadow-lg z-10">
                {fonts.map((f) => (
                  <button
                    key={f.class}
                    onClick={() => {
                      onFontChange(id, f.class);
                      setShowFonts(false);
                    }}
                    className={`px-2 py-1 rounded hover:bg-gray-200 transition text-sm ${f.class} ${font === f.class ? 'bg-gray-200' : 'hover:bg-gray-200'}
`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Textarea */}
      <textarea
        value={editableText}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`flex-1 p-2 resize-none bg-transparent outline-none rounded-b-xl ${font}`}
        placeholder="Write something..."
      />
    </div>
  );
}

export default StickyNotes;
