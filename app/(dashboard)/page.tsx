"use client";

import { Button } from "@/components/ui/button";
import { useOrganization, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import EmptyOrg from "./_component/empty-org";
import BoardList from "./_component/board-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favourites?: string;
  };
}

export default function Dashboard({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();
  return (
    <div className="flex flex-col gap-y-4 flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
}
