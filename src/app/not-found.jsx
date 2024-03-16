"use client";

import Image from "next/image";
import { Button } from "../components/ui/button";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6">
      <Image src="./404image.svg" alt="image" width={400} height={400} />
      <h1 className="text-4xl text-black">Oops! page not found</h1>
      <Link href="/" className="mt-10">
        <Button>Back To Home</Button>
      </Link>
    </div>
  );
};

export default Custom404;
