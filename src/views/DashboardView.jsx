import React from "react";
import BackButton from "../components/BackButtonModule/BackButton";
import DashboardComp from "../components/Dashboard/DashboardComp";

const DashboardView = () => {
  return (
    <section className="py-4 space-y-4">
      <div className="flex items-center md:gap-4 gap-2">
        <BackButton /> <span className="text-2xl font-bold">Dashboard</span>
      </div>

      <DashboardComp
        serviceName={"Sk Tranport"}
        requestId={12345}
        status={"Approval pending"}
        freightType={"International"}
      />
      <DashboardComp
        serviceName={"Sk Tranport"}
        requestId={12345}
        status={"Approval pending"}
        freightType={"International"}
      />
    </section>
  );
};

export default DashboardView;
