import React from "react";
import { Search } from "lucide-react";

export default function SearchInput({ value, onChange }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78756E]" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search notes"
        className="w-full h-11 pl-9 pr-3 rounded-[8px] border border-[#E8E6E1] bg-white text-[16px] md:text-[14px] text-[#1C1A17] placeholder:text-[#78756E] focus:outline-none focus:border-[#D97706]"
      />
    </div>
  );
}