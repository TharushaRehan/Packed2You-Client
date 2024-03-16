"use client";
import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("");

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
