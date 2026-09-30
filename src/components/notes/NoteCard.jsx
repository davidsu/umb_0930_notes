import React from "react";
import { format } from "date-fns";

export default function NoteCard({ note, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-4 rounded-[8px] border transition-colors ${
        active ? "bg-[#FEF3C7] border-[#D97706]/40" : "bg-white border-[#E8E6E1] hover:border-[#D97706]/40"
      }`}
    >
      <div className="text-[15px] font-semibold text-[#1C1A17] truncate">{note.title}</div>
      {note.content && (
        <p className="mt-1 text-[14px] leading-[1.6] text-[#78756E] line-clamp-2">{note.content}</p>
      )}
      <div className="mt-2 text-[12px] text-[#78756E]">
        {format(new Date(note.created_date), "MMM d, yyyy · h:mm a")}
      </div>
    </button>
  );
}