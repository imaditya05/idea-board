import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/Loading";

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
