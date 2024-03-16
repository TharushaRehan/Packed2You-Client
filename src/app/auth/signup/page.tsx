import React from "react";
import Logo from "../../../../public/Logo.svg";
import Image from "next/image";
import SignupForm from "@/components/auth/sign-up-form";

const SignupPage = () => {
  return (
    <div>
      <Image src={Logo} alt="Logo" />
      <SignupForm />
    </div>
  );
};

export default SignupPage;
