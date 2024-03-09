"use client";

import React, { useState } from "react";

import { Raleway } from "next/font/google";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import RenderLocation from "@/components/location/render-location";
import SigninForm from "@/components/auth/sign-in-form";
import SignupForm from "@/components/auth/sign-up-form";
import Contact from "@/components/contact/contact";
import UserDashboard from "@/components/user-dashboard/user-dashboard";
import Shop from "@/components/global/shop";
import PageLayout from "@/components/page-layout/page-layout";

const GroceryShop = () => {
  //
  const [currTab, setCurrTab] = useState("Home");

  const handleTabChange = (tab: string) => {
    setCurrTab(tab);
  };
  //
  //
  return (
    <PageLayout>
      <></>
    </PageLayout>
    // <>
    //   <Header currTab={currTab} onTabChanges={handleTabChange} />
    //   <RenderLocation sectionName={currTab} onTabChanges={handleTabChange} />
    //   {currTab === "Sign In" && <SigninForm onTabChanges={handleTabChange} />}
    //   {currTab === "Sign Up" && <SignupForm onTabChanges={handleTabChange} />}
    //   {currTab === "Shop" && <Shop />}
    //   {currTab === "Contact Us" && <Contact />}
    //   {currTab === "My Account" && <UserDashboard />}
    //   <Footer />
    // </>
  );
};

export default GroceryShop;
