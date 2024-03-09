"use client";

import {
  Heart,
  LayoutDashboard,
  LogOut,
  RefreshCcw,
  Settings,
  ShoppingBag,
} from "lucide-react";
import React from "react";

interface SidebarProps {
  selectedOption: string;
  onOptionChanges: (tab: string) => void;
  allOptions: Array<string>;
}
const Sidebar: React.FC<SidebarProps> = ({
  selectedOption,
  onOptionChanges,
  allOptions,
}) => {
  const UserSidebarIcons = [
    <LayoutDashboard />,
    <RefreshCcw />,
    <Heart />,
    <ShoppingBag />,
    <Settings />,
    <LogOut />,
  ];

  return (
    <div className="border rounded-xl py-5 w-full md:max-w-[300px] h-fit">
      <p className="pl-5 pb-5 font-bold text-xl">Navigation</p>
      {allOptions.map((option, index) => (
        <div
          key={index}
          className={`${
            selectedOption === option
              ? "flex items-center gap-3 bg-[#EDF2EE] border-l-4 border-primary py-3 cursor-pointer px-5 text-[#1A1A1A] font-black"
              : "flex items-center gap-3 py-3 cursor-pointer px-5 text-[#666666] border-l-4 border-background"
          }`}
          onClick={() => onOptionChanges(option)}
        >
          {UserSidebarIcons[index]}
          <p>{option}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
