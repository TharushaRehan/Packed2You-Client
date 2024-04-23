import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ShopLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default ShopLayout;
