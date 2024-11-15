import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { image_url } from "@/lib/constants";
import { Button, Card, Separator } from "@radix-ui/themes";
import { createFileRoute, Link } from "@tanstack/react-router";

import { ArrowRight, InfoIcon } from "lucide-react";

//SCN/YEAR/0001
type ApplyTypes = {
  form_id: string;
  evidence_of_payment: string;
  passport: string;
  surname: string;
  first_name: string;
  middle_name: string;
  applicant_phone_number: string;
  applicant_email_address: string;
  sex: string;
  marital_status: string;
  date_of_birth: string;
  home_town: string;
  country: string;
  state: string;
  local_gov_area: string;
  parmanent_home_address: string;
  name_of_next_of_kin: string;
  address_of_next_of_kin: string;
  next_of_kin_phone_number: string;
  school_name: string;
  date_from: string;
  date_to: string;
  qualification: string;
  exam_type: string;
  year_of_exam: string;
  exam_number: string;
  no_of_sittings: number;
  grade: {
    maths: string;
    english: string;
    chemistry: string;
    biology: string;
    physics: string;
  };
  referees: {
    full_name: string;
    address: string;
  };
};

export const Route = createFileRoute("/_layout/apply/")({
  component: () => (
    <div>
      <Apply />
    </div>
  ),
});

const Apply = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={image_url}
            alt="Nursing students in a classroom"
            className="opacity-20 bg-cover w-full"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Begin Your Nursing Journey
            </h1>
            <p className="text-xl mb-8">
              Apply now to Sahad Nursing College and take the first step towards
              a rewarding career in healthcare. Our application process is
              designed to be straightforward and supportive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="4"
                className="bg-white text-orange-600 hover:bg-orange-100"
              >
                <Link to="/apply/apply/start">
                  Start Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="4"
                color="gray"
                className="hover:bg-white hover:text-orange-600"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <FormInstructions />
      </div>
    </div>
  );
};

function FormInstructions() {
  return (
    <Card className="w-full max-w-3xl mx-auto my-10 ">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <InfoIcon className="h-5 w-5" />
          Application Form Instructions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Please read these instructions carefully before filling out the
          application form.
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="procedure">
            <AccordionTrigger>
              Procedure before filling the form
            </AccordionTrigger>
            <AccordionContent forceMount>
              <ul className="list-disc pl-5 space-y-1 text-xl">
                <li>
                  Deposit the sum of N10,000(Non refundabe) into
                  <li>Account Name:SAHAD HOSPITAL BILLING ACCOUNT</li>
                  <li>Acount No.:1311057352</li>
                  <li>Bank:ZENITH BANK</li>
                </li>
                <li>
                  Upload the evidenve of payment at the last section of the form
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="general">
            <AccordionTrigger>General Instructions</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Fill out all required fields marked with an asterisk (*).
                </li>
                <li>
                  Ensure all information provided is accurate and up-to-date.
                </li>
                <li>
                  Use proper capitalization and formatting for names and
                  addresses.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="personal">
            <AccordionTrigger>Personal Information</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Provide your full legal name as it appears on official
                  documents.
                </li>
                <li>Use a valid email address that you check regularly.</li>
                <li>
                  Enter your phone number in the format: +[country
                  code][number].
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="address">
            <AccordionTrigger>Address Information</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide your complete current address.</li>
                <li>
                  Include your hometown, even if it's different from your
                  current address.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="education">
            <AccordionTrigger>Educational Background</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>List your most recent educational qualification.</li>
                <li>Provide accurate dates for your period of study.</li>
                <li>Include your exam number and the number of sittings.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="grades">
            <AccordionTrigger>Grades</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Enter your grades for Mathematics, English, Chemistry,
                  Biology, and Physics.
                </li>
                <li>
                  Use the grading system specified by your examination board.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="referee">
            <AccordionTrigger>Referee Information</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide the full name and address of your referee.</li>
                <li>Ensure your referee is not a family member.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="documents">
            <AccordionTrigger>Required Documents</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Upload your evidence of payment in PDF or image format.</li>
                <li>
                  Provide a recent passport photograph in JPEG or PNG format.
                </li>
                <li>Ensure all documents are clear and legible.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator size={"4"} className="my-4" />
        <p className="text-sm text-muted-foreground mb-4">
          If you have any questions or encounter any issues while filling out
          the form, please contact our admissions office at
          info@sahadcollegeonursing.org or call +2347070111111.
        </p>
        <Button asChild size={"4"}>
          <Link to="/apply/apply/start"> Begin Application</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
