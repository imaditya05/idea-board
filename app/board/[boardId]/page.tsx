import Canvas from "../_components/canvas/page";

interface boardIdProps {
    params: {
        boardId : string;
    }
}

const boardIdPage = ({params} : boardIdProps) => {
    return <main className="relative h-full w-full bg-neutral-100 touch-none">
    <Canvas boardId={params.boardId} />
    </main >
} 

export default boardIdPage;