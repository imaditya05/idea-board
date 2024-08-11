"use client";

import { useOthers, useSelf } from "@liveblocks/react/suspense";

const MAX_SHOWN_USERS = 2;

const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_USERS;
  return (
    <div className="absolute h-12 top-2 right-2 bg-white shadow-md rounded-md p-3 flex items-center">
      List of Users
    </div>
  );
};

export default Participants;

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white shadow-md rounded-md p-3 flex items-center w-[100px]" />
  );
};
