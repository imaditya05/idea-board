import Image from "next/image";

const EmptyFavourites = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/empty-favourites.svg" alt="empty" height={140} width={140} />
      <h2 className="text-2xl font-semibold mt-6">No favourite boards!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try marking a board as favourite
      </p>
    </div>
  );
};

export default EmptyFavourites;
