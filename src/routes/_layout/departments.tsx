import { ProgramsPage } from "@/components/Departments";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/departments")({
  component: () => (
    <div>
      <ProgramsPage />
    </div>
  ),
});
