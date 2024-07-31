//API route to display all the boards

import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {
    orgId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized Access");
    }

    const boards = await ctx.db
      .query("boards")
      .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
      .order("desc")
      .collect();

    const boardsWithFavouriteRealtion = boards.map((board) => {
      return ctx.db
        .query("userFavourites")
        .withIndex("by_user_board", (q) =>
          q.eq("userId", identity.subject).eq("boardId", board._id)
        )
        .unique()
        .then((favourite) => {
          return {
            ...board,
            isFavourite: !!favourite,
          };
        });
    });

    const boardsWithFavouriteBoolean = Promise.all(boardsWithFavouriteRealtion);

    return boardsWithFavouriteBoolean;
  },
});
