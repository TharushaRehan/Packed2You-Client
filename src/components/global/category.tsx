import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface Props {
  name: string;
  image: any;
}
const Category: React.FC<Props> = ({ name, image }) => {
  const supabase = createClientComponentClient();
  const [categoryImages, setCategoryImages] = useState<any>();

  // useEffect(() => {
  //   getImageURLs();
  // }, []);
  // const getImageURLs = async () => {
  //   try {
  //     const { data } = supabase.storage
  //       .from("category-images") // Replace with your bucket name
  //       .getPublicUrl("categoryImage.62ab2c05-57f9-430a-9291-fa7af2b9a5a3");

  //     if (!data) {
  //       //console.error("error getting public url for", iconId);
  //       return null; // Or handle the error differently
  //     }
  //     console.log(data?.publicUrl);
  //     setCategoryImages(data?.publicUrl);
  //   } catch (error) {
  //     console.log("Error downloading image: ", error);
  //   }
  // };

  return (
    <div className="border hover:border-primary transition-all duration-300 border-neutral-200 rounded-lg py-3 space-y-2 w-[200px] flex flex-col items-center justify-center cursor-pointer">
      <Image src={image} alt={name} width={130} height={130} />
      <p className="text-base text-black/80">{name}</p>
    </div>
  );
};

export default Category;
