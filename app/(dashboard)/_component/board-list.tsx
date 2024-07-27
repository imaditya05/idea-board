"use client";

import EmptyBoard from "./empty-board";
import EmptyFavourites from "./empty-favourites";
import EmptySearch from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  // If there is no data, user is trying to search for something
  if (!data?.length && query.search) {
    return <div><EmptySearch /></div>;
  }

  //User has clicked favourites
  if (!data?.length && query.favourites) {
    return <div><EmptyFavourites /></div>;
  }

  //There are just no boards to display
  if (!data?.length) {
    return <div><EmptyBoard /></div>;
  }

  return <div>{JSON.stringify(query)}</div>;
};

export default BoardList;
