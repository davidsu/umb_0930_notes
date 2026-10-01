import React from "react";
import { Plus } from "lucide-react";
import SearchInput from "./SearchInput";
import NoteList from "./NoteList";
import NoteComposer from "./NoteComposer";
import NoteView from "./NoteView";
import ClearNotesButton from "./ClearNotesButton";

export default function DesktopHome({ notes, isLoading, search, setSearch, selected, setSelected, onSave, saving, onClear, clearing }) {
  return (
    <div className="flex h-screen">
      <aside className="w-[320px] shrink-0 border-r border-[#E8E6E1] flex flex-col">
        <div className="p-5 space-y-4 border-b border-[#E8E6E1]">
          <div className="font-display text-[26px] text-[#1C1A17]">Notes</div>
          <button
            onClick={() => setSelected(null)}
            className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#D97706] text-white text-[14px] font-semibold hover:bg-[#B45309] transition-colors"
          >
            <Plus className="w-4 h-4" /> New Note
          </button>
          <SearchInput value={search} onChange={setSearch} />
        </div>
        <div className="flex-1 overflow-y-auto p-3">
          <NoteList notes={notes} isLoading={isLoading} selectedId={selected?.id} onSelect={setSelected} search={search} />
          {notes.length > 0 && <ClearNotesButton onClear={onClear} clearing={clearing} />}
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-12 py-16">
          {selected ? (
            <NoteView note={selected} />
          ) : (
            <>
              <h1 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-[#1C1A17] mb-10">
                Capture thoughts instantly.
              </h1>
              <div className="bg-white border border-[#E8E6E1] rounded-[8px] p-8">
                <NoteComposer onSave={onSave} saving={saving} />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}