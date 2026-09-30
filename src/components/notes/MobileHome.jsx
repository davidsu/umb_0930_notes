import React, { useState } from "react";
import { Plus } from "lucide-react";
import SearchInput from "./SearchInput";
import NoteList from "./NoteList";
import NoteComposer from "./NoteComposer";
import NoteView from "./NoteView";
import MobileSheet from "./MobileSheet";

export default function MobileHome({ notes, isLoading, search, setSearch, selected, setSelected, onSave, saving }) {
  const [composing, setComposing] = useState(false);

  return (
    <div className="min-h-screen pb-28">
      <header className="sticky top-0 z-10 bg-[#FBFBF9]/95 backdrop-blur border-b border-[#E8E6E1] px-5 pt-6 pb-4 space-y-3">
        <div className="font-display text-[32px] leading-none text-[#1C1A17]">Notes</div>
        <SearchInput value={search} onChange={setSearch} />
      </header>
      <div className="px-4 pt-4">
        <NoteList notes={notes} isLoading={isLoading} selectedId={null} onSelect={setSelected} search={search} />
      </div>
      <button
        onClick={() => setComposing(true)}
        aria-label="New note"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#D97706] text-white shadow-lg shadow-[#D97706]/30 flex items-center justify-center active:scale-95 transition-transform"
      >
        <Plus className="w-7 h-7" />
      </button>
      <MobileSheet open={composing} onOpenChange={setComposing} title="Capture thoughts instantly.">
        <NoteComposer fill saving={saving} onSave={async (d) => { await onSave(d); setComposing(false); }} />
      </MobileSheet>
      <MobileSheet open={!!selected} onOpenChange={(o) => !o && setSelected(null)} title="">
        {selected && <NoteView note={selected} />}
      </MobileSheet>
    </div>
  );
}