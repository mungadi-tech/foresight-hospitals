import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import * as z from "zod";
import logo from "../../assets/logofs.jpeg";

const subjectSchema = z.object({
  exam_type: z.string().min(1, { message: "Exam type is required" }),
  exam_number: z.string().min(1, { message: "Exam number is required" }),
  name: z.string().min(1, { message: "Subject name is required" }),
  grade: z.string().min(1, { message: "Grade is required" }),
});

const formSchema = z.object({
  applicationNumber: z
    .string()
    .min(1, { message: "Application number is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  no_of_sittings: z
    .string()
    .min(1, { message: "Number of sittings is required" }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
  sex: z.string().min(1, { message: "Sex is required" }),
  state: z.string().min(1, { message: "State is required" }),
  localGovernment: z
    .string()
    .min(1, { message: "Local government is required" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  nokPhoneNumber: z
    .string()
    .min(1, { message: "NoK phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  passport: z.instanceof(File).refine((file) => file.size <= 5000000, {
    message: "Passport photo must be less than 5MB",
  }),
  subjects: z
    .array(subjectSchema)
    .min(1, { message: "At least one subject is required" }),
});

// Infer the TypeScript type from the schema
type FormValues = z.infer<typeof formSchema>;

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 30,
  },
  section: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  footer: {
    margin: 2,
    padding: 10,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 10,
    marginVertical: 6,
    fontWeight: "bold",
  },
  text: {
    fontSize: 8,
    marginBottom: 4,
  },
  table: {
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
  passport: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

// Create Document Component
export const MyDocument: React.FC<{ formData: FormValues }> = ({
  formData,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              style={{ width: 300, height: 50, marginBottom: 10 }}
              src={logo}
            />
          </View>
          <View>
            <Text style={styles.title}>SAHAD COLLEGE OF NURSING, ABUJA</Text>
            <Text style={styles.subtitle}>
              ADMISSION FORM 2024/2025 ACADEMIC SESSION
            </Text>

            <Text style={styles.text}>
              APPLICATION ID: {formData.applicationNumber}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.subtitle}>PERSONAL DETAILS</Text>
            <Text style={styles.text}>Name: {formData.name}</Text>
            <Text style={styles.text}>
              Date of Birth: {formData.dateOfBirth}
            </Text>
            <Text style={styles.text}>Sex: {formData.sex}</Text>
            <Text style={styles.text}>State: {formData.state}</Text>
            <Text style={styles.text}>
              Local Government: {formData.localGovernment}
            </Text>
            <Text style={styles.text}>
              Phone Number: {formData.phoneNumber}
            </Text>
            <Text style={styles.text}>
              NoK Phone Number: {formData.nokPhoneNumber}
            </Text>
            <Text style={styles.text}>Email Address: {formData.email}</Text>
          </View>

          {formData.passport && (
            <Image
              style={styles.passport}
              src={URL.createObjectURL(formData.passport)}
            />
          )}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>O' LEVEL RESULTS</Text>
        <Text style={styles.text}>
          Number of Sittings: {formData.no_of_sittings}
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Exam Type</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Exam Number</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Subject</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Grade</Text>
            </View>
          </View>
          {formData.subjects.map((subject, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{subject.exam_type}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{subject.exam_number}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{subject.name}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{subject.grade}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>DECLARATION</Text>
        <Text style={styles.text}>
          I {formData.name} Declare that, the particulars given on this form are
          to the best of my knowledge correct, and that if admitted, I shall
          regard myself bound by the ordinances, status and regulations of Sahad
          College Nursing, Abuja, and that if at any time the School is
          reasonably convinced that any of the information I have given on this
          form is false or incorrect, I will be required to withdraw from the
          course or be liable to prosecution or both.
        </Text>
      </View>
      {/* NOTE */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>NOTE:</Text>
        <Text style={styles.text}>
          - If you upload an UNCLEAR PICTURE, your form will be rendered invalid
          and you will be denied access to the Exam hall.
        </Text>
        <Text style={styles.text}>
          - DO NOT bring mobile phone or Bag to the examination hall.
        </Text>
        <Text style={styles.text}>
          - Bring the original copy of this slip along with all your
          Credentials.
        </Text>
        <Text style={styles.text}>
          - You are advised to keep a copy of this SLIP for reference purpose.
        </Text>
        <Text style={styles.text}>
          - Attendance is compulsory at the examination hall.
        </Text>
        <Text style={styles.text}>
          - You will be marked absent if you do not sit for the examination.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>All Rights Reserved</Text>
        <Text style={styles.text}>© SCON 2024</Text>
        <Text style={styles.text}>
          Printed on {new Date().toLocaleString()}
        </Text>
      </View>
    </Page>
  </Document>
);
