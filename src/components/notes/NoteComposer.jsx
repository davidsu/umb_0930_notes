import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import TagsBar from "./TagsBar";

export default function NoteComposer({ onSave, saving, fill }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await onSave({ title: title.trim(), content, tags });
    setTitle(""); setContent(""); setTags([]);
  };

  return (
    <form onSubmit={submit} className={`flex flex-col gap-4 ${fill ? "flex-1 min-h-0" : ""}`}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full bg-transparent font-display text-[26px] text-[#1C1A17] placeholder:text-[#78756E]/70 focus:outline-none"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing…"
        className={`w-full resize-none bg-transparent text-[16px] md:text-[15px] leading-[1.6] text-[#1C1A17] placeholder:text-[#78756E] focus:outline-none ${fill ? "flex-1 min-h-[160px]" : "min-h-[280px]"}`}
      />
      <TagsBar tags={tags} onChange={setTags} />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!title.trim() || saving}
          className="inline-flex items-center gap-2 h-11 px-6 rounded-[8px] bg-[#D97706] text-white text-[14px] font-semibold hover:bg-[#B45309] disabled:opacity-40 transition-colors"
        >
          {saving && <Loader2 className="w-4 h-4 animate-spin" />}
          Save note
        </button>
      </div>
    </form>
  );
}