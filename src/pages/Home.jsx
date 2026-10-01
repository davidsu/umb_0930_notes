import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNotes, useCreateNote, useClearNotes } from "@/hooks/useNotes";
import DesktopHome from "@/components/notes/DesktopHome";
import MobileHome from "@/components/notes/MobileHome";

export default function Home() {
  const isMobile = useIsMobile();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const { data: notes = [], isLoading } = useNotes(search);
  const create = useCreateNote();
  const clear = useClearNotes();

  const onClear = async () => {
    await clear.mutateAsync();
    setSelected(null);
  };

  const onSave = async (data) => {
    const note = await create.mutateAsync(data);
    if (!isMobile) setSelected(note);
  };

  const props = { notes, isLoading, search, setSearch, selected, setSelected, onSave, saving: create.isPending, onClear, clearing: clear.isPending };
  return (
    <div className="bg-[#FBFBF9] text-[#1C1A17] font-body text-[14px] leading-[1.6]">
      {isMobile ? <MobileHome {...props} /> : <DesktopHome {...props} />}
    </div>
  );
}