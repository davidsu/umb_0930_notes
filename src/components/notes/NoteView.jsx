import React from "react";
import { format } from "date-fns";

export default function NoteView({ note }) {
  return (
    <article>
      <div className="text-[12px] text-[#78756E] uppercase tracking-wider">
        {format(new Date(note.created_date), "EEEE, MMMM d, yyyy · h:mm a")}
      </div>
      <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-[#1C1A17]">{note.title}</h1>
      {note.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {note.tags.map((t) => (
            <span key={t} className="px-2.5 h-7 inline-flex items-center rounded-full bg-[#FEF3C7] text-[12px] font-medium text-[#1C1A17]">{t}</span>
          ))}
        </div>
      )}
      <div className="mt-8 border-t border-[#E8E6E1] pt-8 text-[16px] leading-[1.7] text-[#1C1A17] whitespace-pre-wrap">
        {note.content || <span className="text-[#78756E]">No content.</span>}
      </div>
    </article>
  );
}