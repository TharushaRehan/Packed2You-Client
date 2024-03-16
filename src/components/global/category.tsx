import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  image: any;
}
const Category: React.FC<Props> = ({ name, image }) => {
  return (
    <div className="border border-neutral-200 rounded-lg py-3 space-y-2 w-[200px] flex flex-col items-center justify-center">
      <Image src={image} alt={name} width={130} />
      <p className="text-base text-black/80">{name}</p>
    </div>
  );
};

export default Category;
