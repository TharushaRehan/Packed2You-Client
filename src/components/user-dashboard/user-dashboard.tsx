"use client";

import React, { useState } from "react";
import Sidebar from "./sidebar";
import SidebarContent from "./sidebar-content";

const UserDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const userSidebarOptions = [
    "Dashboard",
    "Order History",
    "Wishlist",
    "Shopping Cart",
    "Settings",
    "Log Out",
  ];

  const handleSelectedOptionChange = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div className="mx-10 mb-20 flex flex-col md:flex-row gap-10">
      <Sidebar
        selectedOption={selectedOption}
        onOptionChanges={handleSelectedOptionChange}
        allOptions={userSidebarOptions}
      />
      <SidebarContent currOption={selectedOption} />
    </div>
  );
};

export default UserDashboard;
