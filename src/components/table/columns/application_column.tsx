import { useToast } from "@/hooks/use-toast";
import {
  Button,
  Checkbox,
  DataList,
  Dialog,
  DropdownMenu,
  Tabs,
  Text,
} from "@radix-ui/themes";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ChevronDownIcon, X } from "lucide-react";
// Define the types based on the Zod schema
type Subject = {
  exam_type: string;
  exam_number: string;
  name: string;
  grade: string;
};

type Referee = {
  full_name: string;
  address: string;
};

type FormData = {
  id: string;
  collectionId: string;
  evidence_of_payment: string;
  passport: string;
  surname: string;
  first_name: string;
  middle_name: string;
  applicant_phone_number: string;
  applicant_email_address: string;
  sex: "MALE" | "FEMALE";
  marital_status: "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOW";
  date_of_birth: Date;
  home_town: string;
  country: string;
  state: string;
  local_gov_area: string;
  parmanent_home_address: string;
  name_of_next_of_kin: string;
  address_of_next_of_kin: string;
  next_of_kin_phone_number: string;
  school_name: string;
  date_from: Date;
  date_to: Date;
  qualification: string;
  year_of_exam: string;
  no_of_sittings: "1" | "2";
  subjects: Subject[];
  referees: Referee[];
};
const DetailModal = ({ data }: { data: FormData }) => {
  const refined_subjects = data.subjects;
  const refined_refrees = data.referees;
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="soft">View Details</Button>
      </Dialog.Trigger>
      <Dialog.Content minHeight={"30rem"}>
        <Dialog.Title>Applicant Details</Dialog.Title>
        <Dialog.Description size={"1"}>
          Comprehensive information about the applicant
        </Dialog.Description>
        <Tabs.Root defaultValue="address" mt={"4"}>
          <Tabs.List mb={"4"}>
            <Tabs.Trigger value="address">Address</Tabs.Trigger>
            <Tabs.Trigger value="education">Education</Tabs.Trigger>
            <Tabs.Trigger value="subjects">Subjects</Tabs.Trigger>
            <Tabs.Trigger value="referees">Referees</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="address">
            <DataList.Root>
              <DataList.Item>
                <DataList.Label>Home Address</DataList.Label>
                <DataList.Value>{data.parmanent_home_address}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Local Government Area</DataList.Label>
                <DataList.Value>{data.local_gov_area}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>State</DataList.Label>
                <DataList.Value>{data.state}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Country</DataList.Label>
                <DataList.Value>{data.country}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Next of Kin</DataList.Label>
                <DataList.Value>{data.name_of_next_of_kin}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Next of Kin Address</DataList.Label>
                <DataList.Value>{data.address_of_next_of_kin}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Next of Kin Phone</DataList.Label>
                <DataList.Value>{data.next_of_kin_phone_number}</DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </Tabs.Content>
          <Tabs.Content value="education">
            <DataList.Root>
              <DataList.Item>
                <DataList.Label>School Name</DataList.Label>
                <DataList.Value>{data.school_name}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Date From</DataList.Label>
                <DataList.Value>
                  {format(data.date_from, "PP p")}
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Date To</DataList.Label>
                <DataList.Value>{format(data.date_to, "PP p")}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Qualification</DataList.Label>
                <DataList.Value>{data.qualification}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Year of Exam</DataList.Label>
                <DataList.Value>{data.year_of_exam}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Number of Sittings</DataList.Label>
                <DataList.Value>{data.no_of_sittings}</DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </Tabs.Content>
          <Tabs.Content value="subjects">
            <DataList.Root>
              {refined_subjects.map((subject: Subject, index: number) => (
                <DataList.Item key={index}>
                  <DataList.Label>{subject.name}</DataList.Label>
                  <DataList.Value>
                    {subject.grade} ({subject.exam_type})
                  </DataList.Value>
                </DataList.Item>
              ))}
            </DataList.Root>
          </Tabs.Content>
          <Tabs.Content value="referees">
            <DataList.Root>
              {refined_refrees.map((referee: Referee, index: number) => (
                <DataList.Item key={index}>
                  <DataList.Label>{referee.full_name}</DataList.Label>
                  <DataList.Value>{referee.address}</DataList.Value>
                </DataList.Item>
              ))}
            </DataList.Root>
          </Tabs.Content>
        </Tabs.Root>
        <Dialog.Close>
          <Button variant="soft" className="absolute top-4 right-4">
            <X />
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export const application_columns: ColumnDef<FormData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(checked) =>
          table.toggleAllPageRowsSelected(!!checked)
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(checked) => row.toggleSelected(!!checked)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "surname",
    header: "Surname",
    cell: ({ row }) => (
      <Text className="capitalize">{row.getValue("surname")} </Text>
    ),
  },
  {
    accessorKey: "first_name",
    header: "First Name",
    cell: ({ row }) => (
      <Text className="capitalize">{row.getValue("first_name")}</Text>
    ),
  },
  {
    accessorKey: "middle_name",
    header: "Middle Name",
    cell: ({ row }) => (
      <Text className="capitalize">
        {row.getValue("middle_name") === "undefined"
          ? "-"
          : row.getValue("middle_name")}
      </Text>
    ),
  },
  {
    accessorKey: "applicant_phone_number",
    header: "Phone Number",
    cell: ({ row }) => <Text>{row.getValue("applicant_phone_number")}</Text>,
  },
  {
    accessorKey: "applicant_email_address",
    header: "Email",
    cell: ({ row }) => <Text>{row.getValue("applicant_email_address")}</Text>,
  },
  {
    accessorKey: "sex",
    header: "Sex",
    cell: ({ row }) => (
      <Text className="capitalize">{row.getValue("sex")}</Text>
    ),
  },
  {
    accessorKey: "marital_status",
    header: "Marital Status",
    cell: ({ row }) => (
      <Text className="capitalize">{row.getValue("marital_status")}</Text>
    ),
  },
  {
    accessorKey: "date_of_birth",
    header: "Date of Birth",
    cell: ({ row }) => (
      <Text>{format(row.getValue("date_of_birth"), "PP p")}</Text>
    ),
  },
  {
    id: "details",
    cell: ({ row }) => <DetailModal data={row.original} />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const formData = row.original;
      const { toast } = useToast();

      return (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost">
              <span className="sr-only">Open menu</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>Actions</DropdownMenu.Label>
            <DropdownMenu.Item
              onSelect={() => {
                navigator.clipboard.writeText(formData.applicant_email_address);
                toast({
                  title: "Email Copied",
                  description:
                    "The applicant's email has been copied to your clipboard.",
                });
              }}
            >
              Copy email address
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <a
                href={`https://sahadnursing.brightedge.dev/api/files/${row.original.collectionId}/${row.original.id}/${row.original.evidence_of_payment}`}
                download={row.original.evidence_of_payment}
              >
                Download Evidence of Payment
              </a>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      );
    },
  },
];
