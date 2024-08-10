"use client";

import { useSelf } from "@liveblocks/react/suspense";
import Info from "../info/page";
import Participants from "../participants/page";
import Toolbar from "../toolbar/page";

interface canvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: canvasProps) => {
  const info = useSelf((me) => me.info);
  console.log(info);
  return (
    <div>
      <Info />
      <Participants />
      <Toolbar />
    </div>
  );
};

export default Canvas;
