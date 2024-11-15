import { useApplications, useContact } from "@/actions/action";
import { application_columns } from "@/components/table/columns/application_column";
import { contact_columns } from "@/components/table/columns/contacts_column";
import { DataTable } from "@/components/table/DataTable";
import { Spinner } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";

export const Route = createFileRoute("/_layout/admin/dashboard/")({
  component: () => (
    <div>
      <Inbox />
    </div>
  ),
});

const Inbox = () => {
  const { data: contact, isPending: isContactPending } = useContact();

  const contacts =
    contact?.items.map((a) => ({
      created: a.created,
      updated: a.updated,
      name: a.name,
      email: a.email,
      subject: a.subject,
      message: a.message,
    })) ?? [];
  return (
    <div className="w-full">
      {isContactPending ? (
        <Spinner />
      ) : (
        <DataTable columns={contact_columns} data={contacts} />
      )}
    </div>
  );
};
