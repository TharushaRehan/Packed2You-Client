import React from "react";
import AccountSettings from "./account-settings";

interface SidebarContentProps {
  currOption: string;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ currOption }) => {
  return (
    <div className="w-full md:min-w-[1000px]">
      {currOption === "Settings" && <AccountSettings />}
      {/* <p className="text-xl">{currOption}</p> */}
    </div>
  );
};

export default SidebarContent;
