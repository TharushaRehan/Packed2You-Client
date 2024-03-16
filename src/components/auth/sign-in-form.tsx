"use client";

import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { actionLoginUser } from "@/lib/sever-actions/auth-actions";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoginScreenImage from "../../../public/undraw_authentication_re_svpt.svg";

interface SigninFormProps {
  onTabChanges: (tab: string) => void;
}
const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  //
  const handleLogIn = async () => {
    if (email && password) {
      const { error } = await actionLoginUser(email, password);

      if (error) {
        setError(error.message);
      } else {
        toast({
          variant: "default",
          title: "Logged in successfully",
        });
        router.refresh();
      }

      // if (data) {
      //   console.log(data);
      // }
    } else {
      setError("");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter email and password.",
      });
    }
  };

  useEffect(() => {
    if (error) {
      setError("");
    }
  }, [email, password]);
  //
  return (
    <div>
      <div className="items-center flex flex-col text-center mb-20">
        <div className="flex flex-col gap-10 w-full max-w-[600px] shadow-lg p-10 rounded-2xl">
          <p className="text-3xl">Sign In</p>
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
            {error ? (
              <p className="text-red-400 self-start font-bold">{error}</p>
            ) : (
              ""
            )}
            <div className="flex items-center justify-between text-[#666666]">
              <div className="flex items-center gap-3 ">
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={() => setIsChecked(!isChecked)}
                />
                <p className="text-sm">Remember Me</p>
              </div>
              <p className="cursor-pointer hover:text-primary hover:opacity-60 transition-all duration-300">
                Forget Password ?
              </p>
            </div>
          </div>
          <Button
            variant={"default"}
            className="rounded-full text-lg h-[50px]"
            onClick={handleLogIn}
          >
            Login
          </Button>
          <p className="text-gray-400">
            Don't have account?{" "}
            <Link href="/auth/signup">
              <span className="text-black cursor-pointer">
                Create an Account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
