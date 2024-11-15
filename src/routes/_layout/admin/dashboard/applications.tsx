import { useApplications } from "@/actions/action";
import { application_columns } from "@/components/table/columns/application_column";
import { DataTable } from "@/components/table/DataTable";
import { Spinner } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";

export const Route = createFileRoute("/_layout/admin/dashboard/applications")({
  component: () => (
    <div>
      <Applications />
    </div>
  ),
});

const Applications = () => {
  const { data: application, isPending: isApplicationPending } =
    useApplications();

  const applications =
    application?.items.map((a) => ({
      id: a.id,
      collectionId: a.collectionId,
      evidence_of_payment: a.evidence_of_payment,
      passport: a.passport,
      surname: a.surname,
      first_name: a.first_name,
      middle_name: a.middle_name || "",
      applicant_phone_number: a.applicant_phone_number || "",
      applicant_email_address: a.applicant_email_address || "",
      sex: a.sex || "",
      marital_status: a.marital_status || "",
      date_of_birth: a.date_of_birth || "",
      home_town: a.home_town || "",
      country: a.country || "",
      state: a.state || "",
      local_gov_area: a.local_gov_area || "",
      parmanent_home_address: a.parmanent_home_address || "",
      name_of_next_of_kin: a.name_of_next_of_kin || "",
      address_of_next_of_kin: a.address_of_next_of_kin || "",
      next_of_kin_phone_number: a.next_of_kin_phone_number || "",
      school_name: a.school_name || "",
      date_from: a.date_from || "",
      date_to: a.date_to || "",
      qualification: a.qualification || "",
      year_of_exam: a.year_of_exam || "",
      no_of_sittings: a.no_of_sittings || "",
      subjects: a.subjects || "",
      referees: a.referees || "",
    })) ?? [];

  return (
    <div className="w-full">
      {isApplicationPending && !applications ? (
        <Spinner />
      ) : (
        <>
          <DataTable columns={application_columns} data={applications} />
        </>
      )}
    </div>
  );
};
