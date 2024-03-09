import React from "react";
import Header from "../header/header";

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default PageLayout;
