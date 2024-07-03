import React from "react";
import DynamicForm from "../DynamicForm";

const formConfig = [
  {
    type: "group",
    label: "Personal Details",
    fields: [
      { type: "text", label: "Name", name: "name" },
      { type: "text", label: "Phone no", name: "phoneNo" },
      { type: "email", label: "Email", name: "email" },
      {
        type: "select",
        label: "Type Phone",
        name: "typePhone",
        options: ["Mobile", "Landline"],
      },
      { type: "text", label: "Business Intro", name: "businessIntro" },
      {
        type: "select",
        label: "Service",
        name: "service",
        options: ["Option 1", "Option 2", "Option 3"],
      },
    ],
  },
  {
    type: "group",
    label: "Experience",
    fields: [
      { type: "text", label: "Driving Years", name: "drivingYears" },
      { type: "text", label: "Vehicle Driven", name: "vehicleDriven" },
      { type: "text", label: "License number", name: "licenseNumber" },
      {
        type: "button",
        label: "Compliance Form",
        name: "complianceForm",
        action: () => {
          // Handle form action here
        },
      },
      {
        type: "button",
        label: "Upload Images",
        name: "uploadImages",
        action: () => {
          // Handle upload action here
        },
      },
      {
        type: "button",
        label: "Download Compliance Form",
        name: "downloadComplianceForm",
        action: () => {
          // Handle download action here
        },
      },
    ],
  },
  {
    type: "group",
    label: "Personal Details",
    fields: [
      { type: "text", label: "Age", name: "age" },
      {
        type: "select",
        label: "Language",
        name: "language",
        options: ["English", "Spanish", "Other"],
      },
      { type: "text", label: "Blood Group", name: "bloodGroup" },
      { type: "text", label: "Aadhaar Number", name: "aadhaarNumber" },
      { type: "text", label: "PAN card number", name: "panCardNumber" },
    ],
  },
  {
    type: "radio",
    label: "Services",
    name: "services",
    options: [
      "FTL",
      "LTL",
      "TCT",
      "First Mile",
      "Dry Van",
      "Last Mile",
      "Flat Bed",
    ],
  },
  {
    type: "group",
    label: "Bank Details",
    fields: [
      { type: "text", label: "Name", name: "bankName" },
      { type: "text", label: "Account Number", name: "accountNumber" },
      { type: "text", label: "Branch Address", name: "branchAddress" },
      { type: "text", label: "IFSC Code", name: "ifscCode" },
    ],
  },
  {
    type: "group",
    label: "Insurance",
    fields: [
      { type: "text", label: "Insurance Company", name: "insuranceCompany" },
      { type: "text", label: "Policy Number", name: "policyNumber" },
      { type: "text", label: "Insurance Cover", name: "insuranceCover" },
      { type: "text", label: "Insurance Premium", name: "insurancePremium" },
      {
        type: "select",
        label: "Start Date",
        name: "startDate",
        options: ["Start Date Option 1", "Start Date Option 2"],
      },
      {
        type: "select",
        label: "End Date",
        name: "endDate",
        options: ["End Date Option 1", "End Date Option 2"],
      },
    ],
  },
];

const Transport = () => {
  return (
    <DynamicForm
      config={formConfig}
      formCSS=""
      formDivCSS=""
      formTitle="Registration Form"
      requestID="12345"
      isBankDetails={true}
    />
  );
};

export default Transport;
