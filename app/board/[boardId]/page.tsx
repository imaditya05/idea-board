import Canvas from "./_components/canvas/page";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading/page";

interface boardIdProps {
  params: {
    boardId: string;
  };
}

const boardIdPage = ({ params }: boardIdProps) => {
  return (
    <main className="relative h-full w-full bg-neutral-100 touch-none">
      <Room roomId={params.boardId} fallback={<Loading />}>
        <Canvas boardId={params.boardId} />
      </Room>
    </main>
  );
};

export default boardIdPage;
