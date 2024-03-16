"use client";

import React, { useState } from "react";
import Logo from "../../../public/Logo.svg";
import MainImage from "../../../public/undraw_empty_cart_co35.svg";
import FreshFruit from "../../../public/fresh-fruit.svg";
import Meat from "../../../public/meatfish.svg";
import Apple from "../../../public/Apple.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogIn, ArrowRight, ArrowLeft } from "lucide-react";
import Footer from "@/components/footer/footer";
import { shopFeatures } from "@/constants/shop-features";
import Category from "@/components/global/category";
import Product from "@/components/global/product";
import Feedback from "@/components/global/feedback";
import Link from "next/link";
import { PopularCategories } from "@/constants/popular-categories";

//
const GroceryShop = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between pr-0 md:pr-5 lg:pr-10 border-b pb-5 md:pb-0">
        <Image src={Logo} alt="Logo" className="w-[200px] md:w-[300px]" />
        <div className="flex gap-5">
          <Button variant={"outline"} className="gap-1">
            Log In <LogIn size={20} />
          </Button>
          <Button className="gap-1">
            Get Started
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
      {/* Main Banner*/}
      <div className="flex flex-col md:flex-row items-center md:justify-between max-w-screen-2xl mx-auto p-5 bg-cyan-100 mt-10 rounded-md px-10 justify-center">
        <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-center md:text-left">
          <p>
            Quality Groceries{" "}
            <span className="text-primary">
              for <br />
            </span>
          </p>
          <p className="text-primary mt-2 md:mt-3 lg:mt-5">Healthier Life</p>
          <p className="text-base font-semi-bold mt-5 max-w-[400px]">
            Discover fresh flavors, exceptional quality, and unbeatable prices,
            all in one place.
          </p>
          <Link href="/shop">
            <Button className="mt-5 gap-1 hover:gap-3 transition-all duration-300">
              Shop Now
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
        <Image
          src={MainImage}
          alt="Image"
          className="w-[200px] md:w-[400px] lg:w-[500px] mt-10 md:mt-0"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-2xl mx-auto rounded-md shadow-lg mb-20 p-2 md:p-5">
        {shopFeatures.map((feature, index) => (
          <div key={index} className="flex gap-5 items-center">
            <Image src={feature.icon} alt={feature.name} />
            <div>
              <p className="font-bold">{feature.name}</p>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-screen-2xl mx-auto mb-20">
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-bold mb-3">
            Our Products Categories
          </p>
          <p className="text-base md:text-xl">
            Explore a diverse range of handpicked
          </p>
          <p className="text-base md:text-xl">
            products for every taste and need.
          </p>
        </div>
        <div className="mt-10 flex justify-between items-center lg:px-0 px-5">
          <p className="text-xl md:text-3xl">Popular Categories</p>
          <Button variant={"outline"} className="gap-1 font-bold">
            View All
            <ArrowRight size={20} />
          </Button>
        </div>
        <div className="flex flex-wrap gap-5 mt-10 justify-center md:justify-start">
          {PopularCategories.map((c, i) => (
            <Category name={c.name} image={c.image} key={i} />
          ))}
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mb-20">
        <div className="mt-5 flex justify-between items-center lg:px-0 px-5">
          <p className="text-xl md:text-3xl">Popular Products</p>
          <Button variant={"outline"} className="gap-1 font-bold">
            View All
            <ArrowRight size={20} />
          </Button>
        </div>
        <div className="flex flex-wrap gap-5 mt-10 justify-center md:justify-start">
          <Product
            name="Green Apple"
            image={Apple}
            key={"1"}
            price={14}
            rating={4}
            sale={20}
          />
          <Product
            name="Green Apple"
            image={Apple}
            key={"1"}
            price={14}
            rating={2}
          />
          {/* Add other products */}
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mb-20">
        <div className="mt-5 flex justify-between items-center lg:px-0 px-5">
          <p className="text-xl md:text-3xl">Hot Deals</p>
          <Button variant={"outline"} className="gap-1 font-bold">
            View All
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mb-20">
        <div className="mt-5 flex justify-between items-center lg:px-0 px-5">
          <p className="text-xl md:text-3xl">Featured Products</p>
          <Button variant={"outline"} className="gap-1 font-bold">
            View All
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mb-20">
        <div className="text-center">
          <p className="text-xl md:text-3xl">Latest News</p>
        </div>
      </div>
      <div className="bg-[#F2F2F2] mb-20 py-5">
        <div className="max-w-screen-2xl mx-auto ">
          <div className="flex justify-between items-center lg:px-0 px-5">
            <p className="text-xl md:text-3xl">Customer Feedbacks</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center">
                <ArrowLeft />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary border flex items-center justify-center">
                <ArrowRight color="#fff" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 mt-10 justify-center md:justify-start">
            <Feedback
              userName="Tharusha"
              feedback="They provide the super quality products and delivered my order quickly."
              rating={5}
            />
            {/* Add other feedbacks */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GroceryShop;

// import Header from "@/components/header/header";
// import Footer from "@/components/footer/footer";
// import RenderLocation from "@/components/location/render-location";
// import SigninForm from "@/components/auth/sign-in-form";
// import SignupForm from "@/components/auth/sign-up-form";
// import Contact from "@/components/contact/contact";
// import UserDashboard from "@/components/user-dashboard/user-dashboard";
// import Shop from "@/components/global/shop";
// import PageLayout from "@/components/page-layout/page-layout";

//const [currTab, setCurrTab] = useState("Home");

// const handleTabChange = (tab: string) => {
//   setCurrTab(tab);
// };

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
