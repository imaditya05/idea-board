"use client";

import { useState } from "react";
import Info from "../info/page";
import Participants from "../participants/page";
import Toolbar from "../toolbar/page";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { useCanRedo, useCanUndo, useHistory } from "@liveblocks/react/suspense";

interface canvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: canvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canUndo}
        canUndo={canRedo}
        undo={history.undo}
        redo={history.redo}
      />
    </main>
  );
};

export default Canvas;
