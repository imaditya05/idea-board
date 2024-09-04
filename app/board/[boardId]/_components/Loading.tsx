import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./Participants";
import { ToolbarSkeleton } from "./Toolbar";

export const Loading = () => {
  return (
    <main className="relative h-full w-full bg-neutral-100 touch-none flex justify-center items-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};
  