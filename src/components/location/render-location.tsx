"use client";
import { ChevronRight, Home } from "lucide-react";
import React, { useEffect, useState } from "react";

interface RenderLocationProps {
  sectionName: string;
  onTabChanges: (tab: string) => void;
}

const RenderSection: React.FC<RenderLocationProps> = ({
  sectionName,
  onTabChanges,
}) => {
  const [fromAccount, setFromAccount] = useState(false);

  const checkLocation = () => {
    if (sectionName === "Sign In" || sectionName === "Sign Up") {
      setFromAccount(true);
    } else {
      setFromAccount(false);
    }
  };

  //
  useEffect(() => {
    checkLocation();
  }, [sectionName]);
  //
  return (
    <div className="mb-10">
      {fromAccount ? (
        <div className="flex gap-3 items-center mx-10">
          <Home />
          <ChevronRight />
          <p>Account</p>
          <ChevronRight />
          <p className="text-primary">{sectionName}</p>
        </div>
      ) : (
        <div className="flex gap-3 items-center mx-10">
          <Home />
          <ChevronRight />
          <p className="text-primary">{sectionName}</p>
        </div>
      )}
    </div>
  );
};

export default RenderSection;
