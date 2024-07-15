import { SlOptions } from "react-icons/sl";
import DynamicForm from "../DynamicForm";
import ScrollToTopOnMount from "../ScrollToTop";

const ConsultingRegistration = () => {
  const formInputs = [
    { label: "Company Name", name: "companyName", type: "text" },
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Mobile Number", name: "mobileNumber", type: "text" },
    { label: "GST", name: "gstNumber", type: "text" },
    { label: "Aadhar", name: "aadhar", type: "text" },
    { label: "PAN Number", name: "panNumber", type: "text" },
    {
      label: "Business Registration No",
      name: "businessRegistration",
      type: "text",
    },
    { label: "Address", name: "address", type: "text" },
    { label: "City", name: "city", type: "text" },
    { label: "State", name: "state", type: "text" },
    { label: "License", name: "license", type: "text" },

    {
      label: "Freight Forwarding And Customer Expertise",
      type: "checkbox",
      options: [
        {
          name: "documentationRequirements",
          label: "Documentation Requirements",
        },
        { name: "tradeCompliance", label: "Trade Compliance" },
        {
          name: "guidanceOnInternationalShipping",
          label: "Guidance on International Shipping",
        },
        { name: "customRegulations", label: "Custom Regulations" },
        { name: "freightConsolidation", label: "Freight Consolidation" },
        {
          name: "freightForwardingProcesses",
          label: "Freight Forwarding Processes",
        },
      ],
    },
    {
      label: "Process Improvement And Optimization",
      type: "checkbox",
      options: [
        {
          name: "dataDrivenDecisionMaking",
          label:
            "Enabling Data-Driven Decision Making And Performance Improvement",
        },
        {
          name: "keyPerformanceIndicators",
          label:
            "Designing and Implementing Key Performance Indicators (KPIs) and Metrics to Monitor and Evaluate Logistics Performance",
        },
        {
          name: "processImprovementInitiatives",
          label:
            "Development And Implementation of Process Improvement Initiatives And Continuous Performance Improvement",
        },
        {
          name: "bottlenecksIdentification",
          label: "Identification of Bottlenecks",
        },
        { name: "leanManagementPractices", label: "Lean Management Practices" },
        {
          name: "currentLogisticsProcessesAnalysis",
          label: "Analysis Of Current Logistics Processes",
        },
      ],
    },
    {
      label: "Reverse Logistics",
      type: "checkbox",
      options: [
        { name: "returnsManagement", label: "Including Returns Management" },
        {
          name: "reverseLogisticsExpertise",
          label:
            "Expertise In Managing Reverse Logistics Processes And Disposal Strategies",
        },
        { name: "productRecalls", label: "Product Recalls" },
        { name: "repair", label: "Repair" },
        { name: "refurbishment", label: "Refurbishment" },
      ],
    },
    {
      label: "Risk Management And Resilience",
      type: "checkbox",
      options: [
        { name: "unforeseenEvents", label: "Unforeseen Events" },
        {
          name: "supplyChainRiskAssessment",
          label: "Advising on Supply Chain Risk Assessment",
        },
        {
          name: "naturalDisasters",
          label:
            "Natural Disasters And Resilience Measures to Manage Disruptions",
        },
        {
          name: "businessContinuityPlanning",
          label: "Business Continuity Planning",
        },
        { name: "mitigationStrategies", label: "Mitigation Strategies" },
      ],
    },
    {
      label: "Supply Chain Management",
      type: "checkbox",

      options: [
        { name: "supplierManagement", label: "Supplier Management" },
        { name: "inventoryOptimization", label: "Inventory Optimization" },
        { name: "demandForecasting", label: "Demand Forecasting" },
        {
          name: "supplyChainStrategyConsultation",
          label: "Consultation on Supply Chain Strategy",
        },
        { name: "networkDesign", label: "Network Design" },
      ],
    },
    {
      label: "Sustainability And Green Logistics",
      type: "checkbox",

      options: [
        { name: "ecoFriendlyPackaging", label: "Eco-friendly Packaging" },
        {
          name: "environmentalRegulationsCompliance",
          label: "Compliance with Environmental Regulations",
        },
        {
          name: "sustainableLogisticsConsultation",
          label: "Consultation on Sustainable Logistics Practices",
        },
        {
          name: "carbonFootprintReduction",
          label: "Carbon Footprint Reduction",
        },
        {
          name: "greenTransportationServices",
          label: "Green Transportation Services",
        },
      ],
    },
    {
      label: "Transportation Management",
      type: "checkbox",

      options: [
        { name: "routePlanning", label: "Route Planning" },
        { name: "carrierSelection", label: "Carrier Selection" },
        { name: "freightCostManagement", label: "Freight Cost Management" },
        { name: "modeOptimization", label: "Mode Optimization (Road)" },
        {
          name: "transportationOperationsOptimization",
          label:
            "Assistance in Optimizing Transportation Operations And Logistics Outsourcing",
        },
      ],
    },
    {
      label: "Technology And Systems",
      type: "checkbox",

      options: [
        {
          name: "enterpriseResourcePlanning",
          label: "Enterprise Resource Planning",
        },
        {
          name: "warehouseManagementSystem",
          label: "Warehouse Management System",
        },
        {
          name: "transportationManagementSystem",
          label: "Transportation Management System",
        },
        {
          name: "logisticsManagementSystem",
          label:
            "Assistance in Selecting and Implementing Logistics Management System",
        },
        {
          name: "supplyChainVisibilityOptimization",
          label:
            "Other Technology Solutions for Supply Chain Visibility and Optimization",
        },
      ],
    },
    {
      label: "Warehouse And Distribution",
      type: "checkbox",
      options: [
        { name: "warehouseAutomation", label: "Warehouse Automation" },
        { name: "inventoryManagement", label: "Inventory Management" },
        {
          name: "orderFulfillmentOptimization",
          label: "Order Fulfillment Optimization",
        },
        {
          name: "distributionNetworkOptimization",
          label: "Distribution Network Optimization",
        },
        {
          name: "pickingAndPackingOperations",
          label: "Picking and Packing Operations",
        },
        {
          name: "warehouseDesignAndLayoutConsulting",
          label: "Consulting Services for Warehouse Design and Layout",
        },
      ],
    },
  ];

  return (
    <>
      <ScrollToTopOnMount />
      <DynamicForm
        config={formInputs}
        formCSS="md:w-fit flex justify-center items-center flex-col gap-6 lg:mx-16 my-2 mx-4"
        isBankDetails={true}
        // formDivCSS="flex flex-rows flex-wrap md:w-2/3 w-screen md:gap-6 gap-4"
        formDivCSS="w-full flex flex-col gap-4 flex md:flex-row flex-wrap md:w-2/3"
        formTitle={"Logistics Consultant Registration"}
        requestID={"1234"}
        ifLabel={false}
        key={"consultingRegistration"}
      />
    </>
  );
};

export default ConsultingRegistration;
