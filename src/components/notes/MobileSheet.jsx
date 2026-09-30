import React from "react";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";

export default function MobileSheet({ open, onOpenChange, title, children }) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[94vh] bg-[#FBFBF9] border-[#E8E6E1]">
        <DrawerTitle className="px-5 pt-3 pb-2 font-display text-[22px] font-normal text-[#1C1A17]">{title}</DrawerTitle>
        <div className="flex-1 min-h-0 overflow-y-auto px-5 pb-6 flex flex-col">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}