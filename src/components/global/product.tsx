import Image from "next/image";
import React from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

interface Props {
  name: string;
  image: any;
  sale?: number;
  price: number;
  rating: number;
}

const Product: React.FC<Props> = ({ name, image, sale, price, rating }) => {
  const stars = Array(5).fill(0);

  const calculateSalePrice = (
    originalPrice: number,
    salePercentage: number
  ): number => {
    const discountAmount = originalPrice * (salePercentage / 100);
    const salePrice = originalPrice - discountAmount;
    return salePrice;
  };
  //
  return (
    <div className="border rounded-xl py-2 w-[300px] flex flex-col items-center">
      <Image src={image} alt={name} width={250} height={250} />
      {sale && (
        <div className="bg-[#EA4B48] text-white px-3 rounded-lg py-1 self-start ml-4 absolute">
          <p>{`Sale ${sale}%`}</p>
        </div>
      )}
      <Heart className="absolute self-end mr-4 mt-1" />
      <div className="px-4 w-full">
        <p>{name}</p>
        <div className="flex justify-between items-center">
          {/* Change the price based on the sale */}
          {sale ? (
            <p className="font-bold text-lg">
              {<span>${calculateSalePrice(price, sale)}</span>}
              <span className="ml-2 text-neutral-400 font-normal line-through">
                ${price}
              </span>
            </p>
          ) : (
            <p className="font-bold text-lg">$ {price}</p>
          )}

          <div className="w-[40px] h-[40px] rounded-full bg-[#ebebeb] flex justify-center items-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
            <ShoppingCart size={20} />
          </div>
        </div>
        <div className="flex gap-1">
          {stars.map((_, index) => (
            <Star
              key={index}
              size={12}
              color={rating >= index + 1 ? "#FF8A00" : "#CCCCCC"}
              fill={rating >= index + 1 ? "#FF8A00" : "#CCCCCC"}
              className=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
