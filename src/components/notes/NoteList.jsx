import React from "react";
import NoteCard from "./NoteCard";

export default function NoteList({ notes, isLoading, selectedId, onSelect, search }) {
  if (isLoading) {
    return (
      <div className="space-y-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-24 rounded-[8px] bg-[#E8E6E1]/50 animate-pulse" />
        ))}
      </div>
    );
  }
  if (!notes.length) {
    return (
      <p className="text-[14px] text-[#78756E] py-10 text-center">
        {search ? "No notes match your search." : "No notes yet. Write your first one."}
      </p>
    );
  }
  return (
    <div className="space-y-2">
      {notes.map((n) => (
        <NoteCard key={n.id} note={n} active={n.id === selectedId} onClick={() => onSelect(n)} />
      ))}
    </div>
  );
}