import React from "react";
import Image from "next/image";
import { Star, UserRound, Quote } from "lucide-react";

interface Props {
  userName: string;
  feedback: string;
  rating: number;
}

const Feedback: React.FC<Props> = ({ userName, feedback, rating }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="w-[400px] bg-white py-5 px-5 rounded-2xl">
      <div className="min-h-[150px] max-h-[150px] border-b border-neutral-200 mb-5">
        <Quote fill="#00B207" color="#fff" className="mb-2" size={30} />
        <p>{feedback}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <UserRound size={30} />
          <div>
            <p className="font-bold text-lg">{userName}</p>
            <p className="text-neutral-400">Customer</p>
          </div>
        </div>
        <div className="flex gap-1">
          {stars.map((_, index) => (
            <Star
              key={index}
              size={15}
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

export default Feedback;
