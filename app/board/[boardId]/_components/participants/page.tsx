const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white shadow-md rounded-md p-3 flex items-center">
      List of Users
    </div>
  );
};

export default Participants;

Participants.Skeleton = function () {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white shadow-md rounded-md p-3 flex items-center w-[100px]" />
  );
};
