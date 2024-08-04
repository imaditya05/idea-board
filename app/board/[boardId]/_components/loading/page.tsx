import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";
import Info from "../info/page";
import Participants from "../participants/page";
import Toolbar from "../toolbar/page";

export const Loading = () => {
  return (
    <main className="relative h-full w-full bg-neutral-100 touch-none flex justify-center items-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin"/>
      <Info.Skeleton /> 
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </main>
  );
};
