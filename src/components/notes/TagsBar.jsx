import React, { useState } from "react";
import { X } from "lucide-react";

export default function TagsBar({ tags, onChange }) {
  const [draft, setDraft] = useState("");

  const add = () => {
    const t = draft.trim().replace(/,$/, "");
    if (t && !tags.includes(t)) onChange([...tags, t]);
    setDraft("");
  };

  return (
    <div className="flex flex-wrap items-center gap-2 border-t border-[#E8E6E1] pt-3">
      {tags.map((t) => (
        <span key={t} className="inline-flex items-center gap-1 pl-2.5 pr-1 h-7 rounded-full bg-[#FEF3C7] text-[12px] font-medium text-[#1C1A17]">
          {t}
          <button type="button" onClick={() => onChange(tags.filter((x) => x !== t))} className="p-1 rounded-full hover:bg-[#D97706]/15" aria-label={`Remove ${t}`}>
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === ",") { e.preventDefault(); add(); }
        }}
        onBlur={add}
        placeholder={tags.length ? "Add tag" : "Add tags — press Enter"}
        className="flex-1 min-w-[140px] h-9 bg-transparent text-[16px] md:text-[14px] text-[#1C1A17] placeholder:text-[#78756E] focus:outline-none"
      />
    </div>
  );
}