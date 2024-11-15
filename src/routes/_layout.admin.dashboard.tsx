import {
  useAnouncement,
  useApplications,
  useContact,
  useUser,
} from "@/actions/action";
import { AdminSideBar } from "@/components/AdminSideBar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Login } from "@/forms/login";
import pb from "@/lib/pocketbase";
import { IconButton, Separator, Spinner, TextField } from "@radix-ui/themes";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import {
  Archive,
  ArchiveX,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Search,
  Trash2,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_layout/admin/dashboard")({
  beforeLoad: async () => {
    const auth = pb.authStore.token;
    if (!auth) {
      throw redirect({ to: "/admin" });
    }
  },
  component: () => (
    <main className="h-screen w-full">
      <Dashboard />
    </main>
  ),
});

function Dashboard() {
  return (
    <div className="flex h-screen">
      <AdminSideBar />
      <main className="p-4 w-full">
        <Outlet />
      </main>
    </div>
  );
}
