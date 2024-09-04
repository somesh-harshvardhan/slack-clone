"use client";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useSearchParams } from "next/navigation";
import React from "react";
interface WorkspaceIdPageProps {}
const page = ({}: WorkspaceIdPageProps) => {
  const workspaceId = useWorkspaceId();
  const { data } = useGetWorkspace({ id: workspaceId });
  return <div></div>;
};

export default page;
