"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import React, { useState } from "react";
import { shopDetails } from "@/constants/shop-details";
import { Button } from "../ui/button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //
  //

  return (
    <div className="flex flex-col flex-wrap md:flex-row mx-0 md:mx-24 mb-20 gap-20 justify-center">
      <div className="flex flex-col gap-5 bg-slate-100 rounded-xl p-5">
        <div className="flex flex-col items-center gap-2 border-b-2 pb-10">
          <MapPin color="#00B207" className="w-10 h-8 md:w-16 md:h-24" />
          <p className="text-sm md:text-base max-w-[50px]:">
            {shopDetails.address}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 border-b-2 pb-10">
          <Mail color="#00B207" className="w-10 h-8 md:w-16 md:h-24" />
          <p className="text-sm md:text-base">{shopDetails.email}</p>
          <p className="text-sm md:text-base">{shopDetails.email1}</p>
        </div>
        <div className="flex flex-col items-center gap-2 pb-10">
          <PhoneCall color="#00B207" className="w-10 h-8 md:w-16 md:h-24" />
          <p className="text-sm md:text-base">{shopDetails.contact}</p>
          <p className="text-sm md:text-base">{shopDetails.contact1}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-slate-100 rounded-xl p-5 md:w-[800px]">
        <div>
          <p className="text-3xl font-bold">Just Say Hello!</p>
          <p className="text-[#808080] mt-3">
            Do you fancy saying hi to me or you want to get started with your
            project and you need my help? Feel free to contact me.
          </p>
        </div>
        <input
          type="text"
          value={name}
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg h-12 pl-5 w-full outline-primary border border-slate-300 text-sm"
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg h-12 pl-5 w-full outline-primary border border-slate-300 text-sm"
        />
        <textarea
          rows={5}
          value={message}
          placeholder="Message"
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg pl-5 pt-5 w-full outline-primary border border-slate-300 text-sm"
        />
        <Button className="w-fit rounded-full">Send Message</Button>
      </div>
    </div>
  );
};

export default Contact;
