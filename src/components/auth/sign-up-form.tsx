"use client";

import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "../ui/use-toast";
import { actionSignUpUser } from "@/lib/sever-actions/auth-actions";
import Link from "next/link";

interface SignupFormProps {
  onTabChanges: (tab: string) => void;
}
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSignUp = async () => {
    if (email && password && confirmpassword && isChecked) {
      if (password === confirmpassword) {
        const { error } = await actionSignUpUser(email, password);

        if (error) {
          setError(error.message);
        } else {
          toast({
            variant: "default",
            title: "Created Account",
            description: "Please confirm your email.",
          });
        }
      } else {
        setError("");
        toast({
          variant: "destructive",
          title: "Error",
          description: "Passwords doesn't match.",
        });
      }
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Input fields can't be empty.",
      });
    }
  };
  //
  useEffect(() => {
    if (error) {
      setError("");
    }
  }, [email, password, confirmpassword]);
  //

  //
  return (
    <div className="items-center flex flex-col text-center mb-20">
      <div className="flex flex-col gap-10 w-full max-w-[600px] shadow-lg p-10 rounded-2xl">
        <p className="text-3xl">Create Account</p>
        <div className="flex flex-col gap-5">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full text-sm outline-none placeholder-neutral-400 h-[45px] px-5 w-full border"
          />
          <div className="flex rounded-full w-full border h-[45px] items-center justify-between px-5">
            <input
              type={`${showPassword ? "text" : "password"}`}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm outline-none placeholder-neutral-400 w-[500px]"
            />
            {showPassword ? (
              <Eye onClick={() => setShowPassword(false)} />
            ) : (
              <EyeOff onClick={() => setShowPassword(true)} />
            )}
          </div>
          <div className="flex rounded-full w-full border h-[45px] items-center justify-between px-5">
            <input
              type={`${showPassword1 ? "text" : "password"}`}
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="text-sm outline-none placeholder-neutral-400 w-[500px]"
            />
            {showPassword1 ? (
              <Eye onClick={() => setShowPassword1(false)} />
            ) : (
              <EyeOff onClick={() => setShowPassword1(true)} />
            )}
          </div>
          <div className="flex items-center text-[#666666] gap-3">
            <Checkbox
              checked={isChecked}
              onCheckedChange={() => setIsChecked(!isChecked)}
            />
            <p className="text-sm">Accept all terms & Conditions</p>
          </div>
        </div>
        <Button
          variant={"default"}
          className="rounded-full text-lg h-[50px]"
          onClick={handleSignUp}
        >
          Create Account
        </Button>
        <p className="text-gray-400">
          Already have an account?{" "}
          <Link href="/auth/login">
            <span className="text-black cursor-pointer">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
