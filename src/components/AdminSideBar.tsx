import { useUser } from "@/actions/action";
import pb from "@/lib/pocketbase";
import { Button, ScrollArea } from "@radix-ui/themes";
import { Link, redirect, useNavigate } from "@tanstack/react-router";
import { Bell, File, Inbox, User } from "lucide-react";

export function AdminSideBar() {
  const { data, isPending } = useUser();
  const navigate = useNavigate();
  return (
    <div className="w-64 bg-background border-r">
      <div className="p-4">
        <Button
          loading={isPending}
          variant="outline"
          className="w-full justify-start"
        >
          <User className="mr-2 h-4 w-4" />
          {data?.email}
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-80px)]">
        <div className="space-y-2 p-4">
          <Button
            asChild
            size={"3"}
            variant="ghost"
            className="w-full justify-start"
          >
            <Link to="/admin/dashboard">
              <Inbox className="mr-2 h-4 w-4" />
              Inbox
            </Link>
          </Button>
          <Button
            asChild
            size={"3"}
            variant="ghost"
            className="w-full justify-start"
          >
            <Link to="/admin/dashboard/anouncements">
              <Bell className="mr-2 h-4 w-4" />
              Anouncement
            </Link>
          </Button>
          <Button
            asChild
            size={"3"}
            variant="ghost"
            className="w-full justify-start"
          >
            <Link to="/admin/dashboard/applications">
              <File className="mr-2 h-4 w-4" />
              Applications
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-20 mt-auto p-4">
          <Button
            color="red"
            onClick={async () => {
              pb.authStore.clear();
              navigate({ to: "/admin", replace: true });
            }}
          >
            Logout
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}
