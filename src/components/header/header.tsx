"use client";

import React, { useEffect, useState } from "react";
import { shopDetails } from "@/constants/shop-details";
import {
  ArrowRight,
  ArrowRightToLine,
  LogIn,
  LogOut,
  MapPin,
  Menu,
  ShoppingCart,
  User,
} from "lucide-react";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import { Heart, Search } from "lucide-react";
import { Button } from "../ui/button";
import { NavItemsList } from "@/constants/nav-items";
import { useSupabaseUser } from "@/lib/providers/supabase-user-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";

//
//
// interface HeaderProps {
//   currTab: string;
//   onTabChanges: (tab: string) => void;
// }
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [currTab, setCurrTab] = useState("");
  const { user } = useSupabaseUser();
  const pathname = usePathname();

  useEffect(() => {
    setCurrTab(pathname);
  }, [pathname]);

  //

  const tabStyles =
    "cursor-pointer flex gap-2 border-b-2 border-transparent hover:border-primary transition-all duration-300 text-gray-400";
  const currTabStyles =
    "cursor-pointer flex gap-2 border-b-2 border-primary transition-all duration-300 text-white";
  //
  //
  return (
    <section className="flex flex-col gap-5 py-5 px-10">
      <div className="flex flex-col md:flex-row items-center justify-between border-b-2 pb-5 border-0 gap-3">
        <div className="flex gap-3">
          <MapPin />
          <div className="flex gap-2">
            <span className="hidden md:block">Store Location -</span>
            <p>{shopDetails.address}</p>
          </div>
        </div>
        {/* <div className="flex gap-3 text-gray-500">
          <Link href={"/auth/login"}>
            <p
              className="cursor-pointer hover:text-gray-900 transition-all duration-300"
              //onClick={() => onTabChanges("Sign In")}
            >
              Sign In
            </p>
          </Link>
          <span>/</span>
          <Link href={"/auth/signup"}>
            <p
              className="cursor-pointer hover:text-gray-900 transition-all duration-300"
              //onClick={() => onTabChanges("Sign Up")}
            >
              Sign Up
            </p>
          </Link>
        </div> */}
      </div>
      <div className="flex md:flex-row flex-wrap justify-between gap-5 items-center">
        <Image
          src={Logo}
          alt="Logo"
          className="w-[180px] md:w-[300px] self-center"
        />
        <div className="flex-col md:flex-row gap-5 hidden md:flex">
          <div className="flex items-center border rounded-xl pl-5 gap-5 border-neutral-500 pr-10">
            <Search color="#666666" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search Anything..."
              className="outline-none w-full md:w-[500px]"
            />
          </div>
          <Button
            variant={"default"}
            className="md:h-[50px] px-8 rounded-xl md:text-lg w-fit self-center"
          >
            Search
          </Button>
        </div>
        <div className="md:hidden cursor-pointer">
          {user ? (
            <Link
              //onClick={() => onTabChanges("My Account")}
              className="flex items-center gap-3"
              href={"/account"}
            >
              <User className="text-gray-900" size={30} />
              <p>My Acoount</p>
            </Link>
          ) : (
            <Link href={"auth/login"}>
              <Button variant={"outline"} className="gap-1">
                Log In <LogIn size={20} />
              </Button>
            </Link>
          )}
        </div>

        <div className="items-center gap-10 hidden md:flex">
          <div className="flex items-center gap-3 cursor-pointer">
            <Heart className="text-gray-900" size={30} />
            <p className="text-sm">Whishlist</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <ShoppingCart className="text-gray-900" size={30} />
            <div>
              <p className="text-gray-500 text-sm">Shopping Cart</p>
              <p>$0.00</p>
            </div>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            {user && (
              <Link
                //onClick={() => onTabChanges("My Account")}
                className="flex items-center gap-3"
                href={"/account"}
              >
                <User className="text-gray-900" size={30} />
                <p>My Acoount</p>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="-mx-10 mt-5 justify-center gap-10 items-center bg-black/90 p-4 hidden md:flex text-transparent">
        {NavItemsList.map((item, index) => (
          <Link
            key={index}
            href={item.page}
            className={`${currTab === item.page ? currTabStyles : tabStyles}`}
          >
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Header;
