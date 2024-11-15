import { Login } from "@/forms/login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/admin/")({
  component: () => (
    <div>
      <Login />
    </div>
  ),
});
