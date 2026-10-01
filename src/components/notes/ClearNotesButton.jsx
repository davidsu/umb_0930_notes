import React from "react";
import { Loader2, Trash2 } from "lucide-react";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ClearNotesButton({ onClear, clearing }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          disabled={clearing}
          className="mt-4 w-full h-10 inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#E8E6E1] bg-white text-[13px] font-medium text-[#78756E] hover:text-[#B91C1C] hover:border-[#B91C1C]/40 transition-colors disabled:opacity-60"
        >
          {clearing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
          Clear all notes
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#FBFBF9] border-[#E8E6E1]">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-display text-[24px] font-normal text-[#1C1A17]">Clear all notes?</AlertDialogTitle>
          <AlertDialogDescription className="text-[#78756E]">
            This permanently deletes every note. It can't be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onClear} className="bg-[#B91C1C] text-white hover:bg-[#991B1B]">
            Delete all
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}