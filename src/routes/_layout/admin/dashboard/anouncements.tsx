import { useAnouncement, useApplications } from "@/actions/action";
import { application_columns } from "@/components/table/columns/application_column";
import { DataTable } from "@/components/table/DataTable";
import { Spinner } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";

export const Route = createFileRoute("/_layout/admin/dashboard/anouncements")({
  component: () => (
    <div>
      <Anouncement />
    </div>
  ),
});

const Anouncement = () => {
  const { data: anouncement, isPending: isAnouncementPending } =
    useAnouncement();

  return (
    <div className="w-full">
      {isAnouncementPending ? (
        <Spinner />
      ) : (
        <DataTable columns={[]} data={[]} />
      )}
    </div>
  );
};
