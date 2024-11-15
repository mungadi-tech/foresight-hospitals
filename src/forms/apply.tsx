import { MyDocument } from "@/components/pdfs/ApplicationPdf";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import pb from "@/lib/pocketbase";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Select, TextArea, TextField } from "@radix-ui/themes";
import { pdf } from "@react-pdf/renderer";
import { format } from "date-fns";
import { PlusCircle, Trash2, Upload } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

export const applicationFormSchema = z.object({
  evidence_of_payment: z.any({ message: "upload evidence of payment" }),
  passport: z.instanceof(File).refine((file) => file.size <= 1000000, {
    message: "Passport photo must be less than 1MB",
  }),
  surname: z.string().min(1, "Surname is required"),
  first_name: z.string().min(1, "First name is required"),
  middle_name: z.string().optional(),
  applicant_phone_number: z
    .string()
    .min(11, "Phone number must be 11 characters")
    .max(11, "phone number must not be more than 11 characters"),
  applicant_email_address: z.string().email("Invalid email address"),
  sex: z.enum(["MALE", "FEMALE"]),
  marital_status: z.enum(["SINGLE", "MARRIED", "DIVORCED", "WIDOW"]),
  date_of_birth: z.string(),
  home_town: z.string().min(1, "Home town is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  local_gov_area: z.string().min(1, "Local government area is required"),
  parmanent_home_address: z
    .string()
    .min(1, "Permanent home address is required"),
  name_of_next_of_kin: z.string().min(1, "Name of next of kin is required"),
  address_of_next_of_kin: z
    .string()
    .min(1, "Address of next of kin is required"),
  next_of_kin_phone_number: z
    .string()
    .min(11, "Phone number must be 11 characters")
    .max(11, "phone number must not be more than 11 characters"),
  school_name: z.string().min(1, "School name is required"),
  date_from: z.string(),
  date_to: z.string(),
  qualification: z.string().min(1, "Qualification is required"),
  year_of_exam: z.string().min(1, "Year of exam is required"),
  no_of_sittings: z.enum(["1", "2"]),
  subjects: z.array(
    z.object({
      exam_type: z.string().min(1, "Exam type is required"),
      exam_number: z.string().min(1, "Exam number is required"),
      name: z.string().min(1, "Subject name is required"),
      grade: z.string().min(1, "Grade is required"),
    })
  ),
  referees: z.array(
    z.object({
      full_name: z.string().min(1, "Referee full name is required"),
      address: z.string().min(1, "Referee address is required"),
    })
  ),
});

type FormValues = z.infer<typeof applicationFormSchema>;

export function ApplicationForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      subjects: [{ exam_type: "", exam_number: "", name: "", grade: "" }],
      referees: [{ full_name: "", address: "" }],
    },
  });

  const {
    fields: subjectFields,
    append: appendSubject,
    remove: removeSubject,
  } = useFieldArray({
    control: form.control,
    name: "subjects",
  });

  const {
    fields: refereeFields,
    append: appendReferee,
    remove: removeReferee,
  } = useFieldArray({
    control: form.control,
    name: "referees",
  });

  const onSubmit = async (data: FormValues) => {
    const response = await pb.collection("application_form").create(data);

    if (response.created) {
      // Generate PDF
      const pdfDoc = (
        <MyDocument
          formData={{
            passport: data.passport,
            applicationNumber: response.id,
            dateOfBirth: format(data.date_of_birth, "PP p"),
            email: data.applicant_email_address,
            localGovernment: data.local_gov_area,
            name: `${data.first_name} ${data.middle_name ?? ""} ${data.surname}`.toUpperCase(),
            nokPhoneNumber: data.next_of_kin_phone_number,
            phoneNumber: data.applicant_phone_number,
            sex: data.sex,
            state: data.state,
            subjects: data.subjects,
            no_of_sittings: data.no_of_sittings,
          }}
        />
      );
      const blob = await pdf(pdfDoc).toBlob();
      // Create a URL for the blob
      const url = URL.createObjectURL(blob);

      // Create a temporary anchor element and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = `${data.first_name}_${data.middle_name ?? ""}_${data.surname}.pdf`;
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Success",
        description: "Application submitted successfully",
      });

      form.reset();
    } else {
      toast({
        title: "Error",
        description: "Sorry, an error occured, please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Surname</FormLabel>
                  <FormControl>
                    <TextField.Root size={"3"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <TextField.Root size={"3"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middle_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <TextField.Root size={"3"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="applicant_phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <TextField.Root size={"3"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="applicant_email_address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <TextField.Root size={"3"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date_of_birth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <TextField.Root
                      size={"3"}
                      type="date"
                      {...field}
                      value={
                        field.value
                          ? new Date(field.value).toISOString().split("T")[0]
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-2">
                  <FormLabel>Sex</FormLabel>
                  <Select.Root
                    size={"3"}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <Select.Trigger placeholder="Select sex" />
                    </FormControl>
                    <Select.Content position="popper">
                      <Select.Item value="MALE">Male</Select.Item>
                      <Select.Item value="FEMALE">Female</Select.Item>
                    </Select.Content>
                  </Select.Root>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marital_status"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-2">
                  <FormLabel>Marital Status</FormLabel>
                  <Select.Root
                    size={"3"}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <Select.Trigger placeholder="Select marital status" />
                    </FormControl>
                    <Select.Content position="popper">
                      <Select.Item value="SINGLE">Single</Select.Item>
                      <Select.Item value="MARRIED">Married</Select.Item>
                      <Select.Item value="DEVORSED">Divorced</Select.Item>
                      <Select.Item value="WIDOW">Widowed</Select.Item>
                    </Select.Content>
                  </Select.Root>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Address Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              <FormField
                control={form.control}
                name="home_town"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Home Town</FormLabel>
                    <FormControl>
                      <TextField.Root size={"3"} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <TextField.Root size={"3"} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <TextField.Root size={"3"} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="local_gov_area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Local Government Area</FormLabel>
                    <FormControl>
                      <TextField.Root size={"3"} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="parmanent_home_address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Permanent Home Address</FormLabel>
                  <FormControl>
                    <TextArea size={"3"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next of Kin Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name="name_of_next_of_kin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name of Next of Kin</FormLabel>
                    <FormControl>
                      <TextField.Root size={"3"} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="next_of_kin_phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Next of Kin Phone Number</FormLabel>
                    <FormControl>
                      <TextField.Root size={"3"} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address_of_next_of_kin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address of Next of Kin</FormLabel>
                  <FormControl>
                    <TextArea size={"3"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Educational Background</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="school_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Name</FormLabel>
                  <FormControl>
                    <TextField.Root size={"3"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date_from"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date From</FormLabel>
                  <FormControl>
                    <TextField.Root
                      size={"3"}
                      type="date"
                      {...field}
                      value={
                        field.value
                          ? new Date(field.value).toISOString().split("T")[0]
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date_to"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date To</FormLabel>
                  <FormControl>
                    <TextField.Root
                      size={"3"}
                      type="date"
                      {...field}
                      value={
                        field.value
                          ? new Date(field.value).toISOString().split("T")[0]
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="qualification"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qualification</FormLabel>
                  <FormControl>
                    <TextField.Root size={"3"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year_of_exam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year of Exam</FormLabel>
                  <FormControl>
                    <TextField.Root size={"3"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="no_of_sittings"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-2">
                  <FormLabel>Number of Sittings</FormLabel>
                  <Select.Root
                    size={"3"}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <Select.Trigger placeholder="No. of sittings" />
                    </FormControl>
                    <Select.Content position="popper">
                      <Select.Item value="1">1</Select.Item>
                      <Select.Item value="2">2</Select.Item>
                    </Select.Content>
                  </Select.Root>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subjects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {subjectFields.map((field, index) => (
              <div
                key={field.id}
                className="grid md:grid-cols-5 flex-col md:items-center gap-4"
              >
                <FormField
                  control={form.control}
                  name={`subjects.${index}.exam_type`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Exam Type</FormLabel>
                      <FormControl>
                        <TextField.Root size={"3"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`subjects.${index}.exam_number`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Exam Number</FormLabel>
                      <FormControl>
                        <TextField.Root size={"3"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`subjects.${index}.name`}
                  render={({ field }) => (
                    <FormItem className="flex flex-col md:mt-2">
                      <FormLabel>Subject Name</FormLabel>
                      <Select.Root
                        size={"3"}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <Select.Trigger placeholder="Select Subject Name" />
                        </FormControl>
                        <Select.Content position="popper">
                          <Select.Item value="ENGLISH">ENGLISH</Select.Item>
                          <Select.Item value="MATHEMATICS">
                            MATHEMATICS
                          </Select.Item>
                          <Select.Item value="CHEMISTRY">CHEMISTRY</Select.Item>
                          <Select.Item value="PHYSICS">PHYSICS</Select.Item>
                          <Select.Item value="BIOLOGY">BIOLOGY</Select.Item>
                        </Select.Content>
                      </Select.Root>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`subjects.${index}.grade`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade</FormLabel>
                      <FormControl>
                        <TextField.Root size={"3"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="md:mt-8">
                  <Button
                    type="button"
                    color="red"
                    onClick={() => removeSubject(index)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove Subject
                  </Button>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                appendSubject({
                  exam_type: "",
                  exam_number: "",
                  name: "",
                  grade: "",
                })
              }
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Subject
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Referees</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {refereeFields.map((field, index) => (
              <div key={field.id} className="space-y-4">
                <FormField
                  control={form.control}
                  name={`referees.${index}.full_name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <TextField.Root size={"3"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`referees.${index}.address`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <TextArea size={"3"} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="button"
                  color="red"
                  onClick={() => removeReferee(index)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove Referee
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => appendReferee({ full_name: "", address: "" })}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Referee
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documents</CardTitle>
          </CardHeader>
          <CardContent className=" flex gap-4 items-center">
            <FormField
              control={form.control}
              name="evidence_of_payment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Evidence of Payment</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Upload className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      <Input
                        id="file-input"
                        type="file"
                        {...field}
                        value={undefined}
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                        className="pl-8 cursor-pointer file:cursor-pointer"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passport Photograph</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Upload className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      <Input
                        id="file-input"
                        type="file"
                        {...field}
                        value={undefined}
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                        className="pl-8 cursor-pointer file:cursor-pointer"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Button loading={form.formState.isSubmitting} type="submit" size={"4"}>
          Submit Application
        </Button>
      </form>
    </Form>
  );
}
