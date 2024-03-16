import SigninForm from "@/components/auth/sign-in-form";
import React from "react";
import Logo from "../../../../public/Logo.svg";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div>
      <Image src={Logo} alt="Logo" />
      <SigninForm />
    </div>
  );
};

export default LoginPage;
