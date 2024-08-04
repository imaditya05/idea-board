"use client"

import Info from "../info/page";
import Participants from "../participants/page";
import Toolbar from "../toolbar/page";

interface canvasProps {
    boardId : string;
}

const Canvas = ({boardId} : canvasProps) => {
    return <div>
        <Info />
        <Participants />
        <Toolbar />
    </div>
}

export default Canvas;