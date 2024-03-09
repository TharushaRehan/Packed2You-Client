"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Camera, Eye, EyeOff } from "lucide-react";

const AccountSettings = () => {
  //
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //

  const [billingFirstName, setBillingFirstName] = useState("");
  const [billingLastName, setBillingLastName] = useState("");
  const [billingCompanyName, setBillingCompanyName] = useState("");
  const [billingStreetAddress, setBillingStreetAddress] = useState("");
  const [billingCountry, setBillingCountry] = useState("");
  const [billingStates, setBillingStates] = useState("");
  const [billingZipCode, setBillingZipCode] = useState("");
  const [billingEmail, setBillingEmail] = useState("");
  const [billingPhone, setBillingPhone] = useState("");
  //

  const [currPassword, setCurrPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureText1, setSecureText1] = useState(true);
  const [secureText2, setSecureText2] = useState(true);
  const [secureText3, setSecureText3] = useState(true);
  //
  return (
    <>
      <div className="border-primary border rounded-xl px-10 py-5">
        <p className="text-xl pb-2 border-b mb-8">Account Settings</p>
        <div className="flex justify-center lg:justify-between lg:flex-row flex-col-reverse">
          <div>
            <div className="space-y-2 mb-3">
              <Label>First Name</Label>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full lg:w-[600px] outline-primary"
                placeholder="Dianne"
              />
            </div>
            <div className="space-y-2 mb-3">
              <Label>Last Name</Label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full lg:w-[600px] outline-primary"
                placeholder="Russell"
              />
            </div>
            <div className="space-y-2 mb-3">
              <Label>Email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full lg:w-[600px] outline-primary"
                placeholder="diannerussell@gmail.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full lg:w-[600px] outline-primary"
                placeholder="(603) 555-0123"
              />
            </div>
            <Button className="mt-8">Save Changes</Button>
          </div>
          <div className="items-center flex flex-col gap-5 mr-0 lg:mr-20 mb-10 lg:mb-0">
            <div className="rounded-full border w-[95px] h-[90px] md:w-[160px] md:h-[150px] items-center justify-center flex">
              <Camera color="#868585" />
            </div>
            <Button variant={"outline"} className="text-xs md:text-base">
              Choose Image
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10 border-primary border rounded-xl px-10 py-5">
        <p className="text-xl pb-2 border-b mb-8">Billing Address</p>
        <div className="flex flex-col md:flex-row justify-between gap-0 md:gap-6">
          <div className="space-y-2 mb-3 w-full">
            <Label>First Name</Label>

            <Input
              value={billingFirstName}
              onChange={(e) => setBillingFirstName(e.target.value)}
              className="outline-primary"
              placeholder="Dianne"
            />
          </div>
          <div className="space-y-2 mb-3 w-full">
            <Label>Last Name</Label>
            <Input
              value={billingLastName}
              onChange={(e) => setBillingLastName(e.target.value)}
              className="outline-primary"
              placeholder="Russell"
            />
          </div>
          <div className="space-y-2 mb-3 w-full">
            <Label>
              Company Name <span className="text-gray-500">(Optional)</span>
            </Label>
            <Input
              value={billingCompanyName}
              onChange={(e) => setBillingCompanyName(e.target.value)}
              className="outline-primary"
              placeholder="Packed2You"
            />
          </div>
        </div>
        <div className="space-y-2 mb-3 w-full">
          <Label>Street Address</Label>
          <Input
            value={billingStreetAddress}
            onChange={(e) => setBillingStreetAddress(e.target.value)}
            className="outline-primary"
            placeholder="No.326 ..."
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-0 md:gap-6">
          <div className="space-y-2 mb-3 w-full">
            <Label>Country</Label>
            <Input
              value={billingCountry}
              onChange={(e) => setBillingCountry(e.target.value)}
              className="outline-primary"
              placeholder="United States"
            />
          </div>
          <div className="space-y-2 mb-3 w-full">
            <Label>States</Label>
            <Input
              value={billingStates}
              onChange={(e) => setBillingStates(e.target.value)}
              className="outline-primary"
              placeholder="Washington DC"
            />
          </div>
          <div className="space-y-2 mb-3 w-full">
            <Label>Zip Code</Label>
            <Input
              value={billingZipCode}
              onChange={(e) => setBillingZipCode(e.target.value)}
              className="outline-primary"
              placeholder="20033"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-0 md:gap-6">
          <div className="space-y-2 mb-3 w-full">
            <Label>Email</Label>
            <Input
              value={billingEmail}
              onChange={(e) => setBillingEmail(e.target.value)}
              className="outline-primary"
              placeholder="diannerussell@gmail.com"
            />
          </div>
          <div className="space-y-2 mb-3 w-full">
            <Label>Phone</Label>
            <Input
              value={billingPhone}
              onChange={(e) => setBillingPhone(e.target.value)}
              className="outline-primary"
              placeholder="(603) 555-0123"
            />
          </div>
        </div>
        <Button className="mt-8">Save Changes</Button>
      </div>
      <div className="mt-10 border-primary border rounded-xl px-10 py-5">
        <p className="text-xl pb-2 border-b mb-8">Change Password</p>
        <div className="flex flex-col md:flex-row justify-between gap-0 md:gap-6">
          <div className="space-y-2 mb-3 w-full">
            <Label>Current Password</Label>
            <div className="flex items-center pr-2 border border-input rounded-md">
              <Input
                value={currPassword}
                onChange={(e) => setCurrPassword(e.target.value)}
                className="border-none outline-none"
                type={secureText1 ? "password" : "text"}
              />
              {secureText1 ? (
                <EyeOff onClick={() => setSecureText1(!secureText1)} />
              ) : (
                <Eye onClick={() => setSecureText1(!secureText1)} />
              )}
            </div>
          </div>
          <div className="space-y-2 mb-3 w-full">
            <Label>New Password</Label>
            <div className="flex items-center pr-2 border border-input rounded-md">
              <Input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border-none outline-none"
                type={secureText2 ? "password" : "text"}
              />
              {secureText2 ? (
                <EyeOff onClick={() => setSecureText2(!secureText2)} />
              ) : (
                <Eye onClick={() => setSecureText2(!secureText2)} />
              )}
            </div>
          </div>
          <div className="space-y-2 mb-3 w-full">
            <Label>Confirm Password</Label>
            <div className="flex items-center pr-2 border border-input rounded-md">
              <Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-none outline-none"
                type={secureText3 ? "password" : "text"}
              />
              {secureText3 ? (
                <EyeOff onClick={() => setSecureText3(!secureText3)} />
              ) : (
                <Eye onClick={() => setSecureText3(!secureText3)} />
              )}
            </div>
          </div>
        </div>
        <Button className="mt-8">Save Changes</Button>
      </div>
    </>
  );
};

export default AccountSettings;
