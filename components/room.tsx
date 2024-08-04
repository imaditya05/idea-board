"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: ReactNode;
}

export function Room({ children, roomId , fallback}: RoomProps) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_5R_Cgg11VXveNivF0_U-lnmTYTuoSKJ3tdRK96rUnB-1eic2NRpEXszbm-Y3N7GW"
      }
    >
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={fallback}>
          {() => children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
