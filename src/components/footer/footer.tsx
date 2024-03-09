"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import Logo from "../../../public/Logo.svg";
import AppStoreDownload from "../../../public/AppStoreDown.svg";
import PlayStoreDownload from "../../../public/GooglePlayDown.svg";
import Image from "next/image";
import { FooterItems } from "@/constants/footer-items";
import Facebook from "../../../public/facebook.svg";
import Twitter from "../../../public/twitter.svg";
import Pinterest from "../../../public/pinterest.svg";
import Instagram from "../../../public/instagram.svg";
//
//
const Footer = () => {
  //
  //
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  //
  //

  const handleSubscribe = () => {
    if (email) {
      // TO-DO --- validate the email and subscribe the newsletter
      toast({
        title: "Success",
        description: "Subscribed to our newsletter",
        variant: "default",
      });
    } else {
      toast({
        title: "Error",
        description: "Please enter an email",
        variant: "destructive",
      });
    }
  };
  return (
    <footer className="">
      <section className="bg-black/90 p-10">
        <div className="flex flex-col flex-wrap gap-10 md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl font-medium mb-4 text-white">
              Subscribe to our Newsletter
            </h2>
            <p className="text-white/50 lg:w-[400px] w-[300px] text-sm">
              Join our newsletter for updates on the latest groceries, including
              a premium selection of alcoholic beverages. Cheers to great deals
              and delicious finds!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full max-w-[600px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="rounded-full text-sm bg-neutral-600 text-white outline-none placeholder-neutral-400 h-[45px] pl-5 w-full"
            />
            <Button
              variant={"default"}
              className="rounded-full text-lg"
              onClick={handleSubscribe}
              size={"lg"}
            >
              Subscribe
            </Button>
          </div>
          <div className="flex gap-8">
            <Link href="" className="cursor-pointer">
              <Image src={Facebook} alt="" width={25} />
            </Link>
            <Link href="" className="cursor-pointer">
              <Image src={Twitter} alt="" width={25} />
            </Link>
            <Link href="" className="cursor-pointer">
              <Image src={Pinterest} alt="" width={25} />
            </Link>
            <Link href="" className="cursor-pointer">
              <Image src={Instagram} alt="" width={25} />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 p-10">
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col mb-4 sm:mb-0">
            <Image src={Logo} alt="Logo" className="md:w-[300px]" />
            <p className="text-neutral-600 font-thin w-[450px]">
              Your destination for quality groceries and fine spirits, delivered
              to your doorstep with care.
            </p>
          </div>

          {FooterItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-black font-semibold mb-4 text-lg">
                {item.colName}
              </h3>
              <ul>
                {item.listItems.map((i, index) => (
                  <li
                    key={index}
                    className="text-gray-600 hover:text-primary/80 border-b-2 w-fit border-transparent hover:border-primary/80 transition-all duration-300 cursor-pointer mb-2"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-black font-semibold mb-2 text-lg">
              Download Mobile App
            </h3>
            <div className="flex gap-3">
              <Image
                src={AppStoreDownload}
                alt="App Store"
                className="cursor-pointer"
              />
              <Image
                src={PlayStoreDownload}
                alt="PLay Store"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
