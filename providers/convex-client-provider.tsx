"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  ConvexReactClientOptions,
} from "convex/react";
import { ReactNode } from "react";
import { Loading } from "@/components/auth/loading";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!; // "!" at the end makes sure it's never undefined

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>
        {children}
        </Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
    
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
