"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Create Organization" side="right" align="start" sideOffset={18} >
          <button className="flex justify-center items-center bg-white/25 h-full w-full rounded-md opacity-60 hover:opacity-100 transition">
            <Plus className="text-white" />
          </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 border-none bg-transparent max-w-[480px]">
        <CreateOrganization routing="hash"/>
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
