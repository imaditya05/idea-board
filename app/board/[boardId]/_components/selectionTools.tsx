"use client";

import { Camera, Color } from "@/types/canvas";
import { memo } from "react";

interface selectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

export const SelectionTools = memo(
  ({ camera, setLastUsedColor }: selectionToolsProps) => {
    return <div>Selection Tools</div>;
  }
);

SelectionTools.displayName = "SelectionTools";
